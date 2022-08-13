import { Textarea } from '@contentful/f36-components'
import { WidgetProps } from '@rjsf/core'
import { ChangeEvent } from 'react'

export const TextareaWidget: React.FC<WidgetProps> = (props) => {
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    return props.onChange(value === '' ? props.options.emptyValue : value)
  }

  return (
    <Textarea
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={props.autofocus}
      id={props.id}
      isDisabled={props.disabled}
      isReadOnly={props.readonly}
      onChange={onChange}
      value={props.value}
    />
  )
}
