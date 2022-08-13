import { FormControl } from '@contentful/f36-components'
import { FieldTemplateProps } from '@rjsf/core'

export const FieldTemplate: React.FC<FieldTemplateProps> = (props) => {
  return props.hidden
    ? props.children
    : (
      <FormControl
        isRequired={props.required}
      >
        <FormControl.Label>{props.label}</FormControl.Label>
        {props.children}
        {props.description && (
          <FormControl.HelpText>
            {props.description}
          </FormControl.HelpText>
        )}
        {props.rawErrors?.length > 0 && (
          <FormControl.ValidationMessage>
            {props.rawErrors[0] }
          </FormControl.ValidationMessage>
        )}
      </FormControl>
    )
}
