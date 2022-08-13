import { IconButton, TextInput } from '@contentful/f36-components'
import { PreviewIcon, PreviewOffIcon } from '@contentful/f36-icons'
import { WidgetProps } from '@rjsf/core'
import { ChangeEvent, useState } from 'react'

export const PasswordWidget: React.FC<WidgetProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    return props.onChange(value === '' ? props.options.emptyValue : value)
  }

  return (
    <TextInput.Group>
      <TextInput
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={props.autofocus}
        id={props.id}
        isDisabled={props.disabled}
        isReadOnly={props.readonly}
        onChange={onChange}
        type={isPasswordVisible ? 'text' : 'password'}
        value={props.value}
      />
      <IconButton
        aria-label="Unlock"
        icon={isPasswordVisible ? <PreviewOffIcon /> : <PreviewIcon />}
        onClick={() => {
          setIsPasswordVisible((prev) => !prev)
        }}
        variant="secondary"
      />
    </TextInput.Group>
  )
}
