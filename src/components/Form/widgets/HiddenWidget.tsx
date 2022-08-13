import { IconButton, TextInput } from '@contentful/f36-components'
import { PreviewIcon, PreviewOffIcon } from '@contentful/f36-icons'
import { WidgetProps } from '@rjsf/core'
import { ChangeEvent, useState } from 'react'

export const HiddenWidget: React.FC<WidgetProps> = (props) => {
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    return props.onChange(value === '' ? props.options.emptyValue : value)
  }

  return (
    <TextInput.Group>
      <TextInput
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={props.autofocus}
        hidden={true}
        id={props.id}
        isDisabled={props.disabled}
        isReadOnly={props.readonly}
        onChange={onChange}
        type="text"
        value={props.value}
      />
    </TextInput.Group>
  )
}
