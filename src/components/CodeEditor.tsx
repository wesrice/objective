import { SerializedJSONValue } from '@contentful/app-sdk'
import MonacoEditor, {
  ChangeHandler,
  EditorWillMount
} from 'react-monaco-editor'

import { theme } from './theme'

export type CodeEditorProps = {
  code: string;
  onChange?: ChangeHandler;
  readOnly?: boolean
}

export const CodeEditor = <T extends object, >({
  code,
  onChange,
  readOnly = false
}: CodeEditorProps & T) => {
  const editorWillMount: EditorWillMount = (monaco) => {
    monaco.editor.defineTheme('onedark', theme)
  }

  return (
    <MonacoEditor
      editorWillMount={editorWillMount}
      height={300}
      language="json"
      onChange={onChange}
      options={{
        automaticLayout: true,
        fontSize: 14,
        lineDecorationsWidth: 5,
        minimap: {
          enabled: false
        },
        readOnly,
        tabSize: 2
      }}
      theme="onedark"
      value={code}
    />
  )
}
