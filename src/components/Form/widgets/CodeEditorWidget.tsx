import { Box } from '@contentful/f36-components'
import tokens from '@contentful/f36-tokens'
import { WidgetProps } from '@rjsf/core'

import { CodeEditor, CodeEditorProps } from '~/components/CodeEditor'

export const CodeEditorWidget: React.FC<WidgetProps> = (props) => {
  const onChange: CodeEditorProps['onChange'] = (value) => {
    // console.log('change', value)
    props.onChange(value === '' ? props.options.emptyValue : value)
  }

  return (
    <Box
      style={{
        border: `1px solid ${tokens.gray300}`,
        borderRadius: tokens.borderRadiusMedium,
        overflow: 'hidden'
      }}
    >
      <CodeEditor
        code={props.value}
        onChange={onChange}
      />
    </Box>
  )
}
