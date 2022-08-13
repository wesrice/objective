import BaseForm, { FormProps as BaseFormProps } from '@rjsf/core'
import Ajv from 'ajv'

import { ArrayFieldTemplate } from './field-templates/ArrayFieldTemplate'
import { ErrorListTemplate } from './field-templates/ErrorListTemplate'
import { FieldTemplate } from './field-templates/FieldTemplate'
import * as Widgets from './widgets'
export type { SerializedJSONValue } from '@contentful/app-sdk'

export type JSONSchema = BaseFormProps<any>['schema']

export type FormProps<T> = Pick<
  BaseFormProps<T>,
    'children'
    | 'className'
    | 'formData'
    | 'onChange'
    | 'schema'
    | 'uiSchema'
>

const ajv = new Ajv()

export function Form<T> ({
  children,
  className,
  formData,
  onChange,
  schema,
  uiSchema
}: FormProps<T>) {
  const validate = ajv.compile(schema)

  if (validate(schema)) {
    return (
      <BaseForm<T>
        ArrayFieldTemplate={ArrayFieldTemplate}
        ErrorList={ErrorListTemplate}
        FieldTemplate={FieldTemplate}
        className={className}
        formData={formData}
        liveValidate
        onChange={onChange}
        schema={schema}
        uiSchema={uiSchema}
        widgets={Widgets}
      >
        {children}
      </BaseForm>
    )
  } else {
    return <>Error!</>
  }
}
