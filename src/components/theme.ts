import tokens from '@contentful/f36-tokens'
import { editor } from 'monaco-editor/esm/vs/editor/editor.api'

export const theme: editor.IStandaloneThemeData = {
  base: 'vs',
  colors: {
    'editor.background': tokens.gray100,
    'editor.foreground': tokens.gray600,
    'editor.lineHighlightBackground': tokens.gray200,
    // 'editor.selectionBackground': tokens.gray200,
    'editorCursor.foreground': '#ff0000',
    'editorWhitespace.foreground': '#BBBBBB'
  },
  inherit: true,
  rules: [
    {
      background: 'F8F8FF',
      token: ''
    },
    {
      fontStyle: 'italic',
      foreground: '999988',
      token: 'comment'
    },
    {
      fontStyle: 'bold',
      foreground: '999999',
      token: 'comment.block.preprocessor'
    },
    {
      fontStyle: 'bold italic',
      foreground: '999999',
      token: 'comment.documentation'
    },
    {
      fontStyle: 'bold italic',
      foreground: '999999',
      token: 'comment.block.documentation'
    },
    {
      background: 'e3d2d2',
      foreground: 'a61717',
      token: 'invalid.illegal'
    },
    {
      fontStyle: 'bold',
      token: 'keyword'
    },
    {
      fontStyle: 'bold',
      token: 'storage'
    },
    {
      fontStyle: 'bold',
      token: 'keyword.operator'
    },
    {
      fontStyle: 'bold',
      token: 'constant.language'
    },
    {
      fontStyle: 'bold',
      token: 'support.constant'
    },
    {
      fontStyle: 'bold',
      foreground: '445588',
      token: 'storage.type'
    },
    {
      fontStyle: 'bold',
      foreground: '445588',
      token: 'support.type'
    },
    {
      foreground: '008080',
      token: 'entity.other.attribute-name'
    },
    {
      foreground: '0086b3',
      token: 'variable.other'
    },
    {
      foreground: '999999',
      token: 'variable.language'
    },
    {
      fontStyle: 'bold',
      foreground: '445588',
      token: 'entity.name.type'
    },
    {
      fontStyle: 'bold',
      foreground: '445588',
      token: 'entity.other.inherited-class'
    },
    {
      fontStyle: 'bold',
      foreground: '445588',
      token: 'support.class'
    },
    {
      foreground: '008080',
      token: 'variable.other.constant'
    },
    {
      foreground: '800080',
      token: 'constant.character.entity'
    },
    {
      foreground: '990000',
      token: 'entity.name.exception'
    },
    {
      foreground: '990000',
      token: 'entity.name.function'
    },
    {
      foreground: '990000',
      token: 'support.function'
    },
    {
      foreground: '990000',
      token: 'keyword.other.name-of-parameter'
    },
    {
      foreground: '555555',
      token: 'entity.name.section'
    },
    {
      foreground: '000080',
      token: 'entity.name.tag'
    },
    {
      foreground: '008080',
      token: 'variable.parameter'
    },
    {
      foreground: '008080',
      token: 'support.variable'
    },
    {
      foreground: '009999',
      token: 'constant.numeric'
    },
    {
      foreground: '009999',
      token: 'constant.other'
    },
    {
      foreground: 'dd1144',
      token: 'string - string source'
    },
    {
      foreground: 'dd1144',
      token: 'constant.character'
    },
    {
      foreground: '009926',
      token: 'string.regexp'
    },
    {
      foreground: '990073',
      token: 'constant.other.symbol'
    },
    {
      fontStyle: 'bold',
      token: 'punctuation'
    },
    {
      background: 'ffdddd',
      foreground: '000000',
      token: 'markup.deleted'
    },
    {
      fontStyle: 'italic',
      token: 'markup.italic'
    },
    {
      foreground: 'aa0000',
      token: 'markup.error'
    },
    {
      foreground: '999999',
      token: 'markup.heading.1'
    },
    {
      background: 'ddffdd',
      foreground: '000000',
      token: 'markup.inserted'
    },
    {
      foreground: '888888',
      token: 'markup.output'
    },
    {
      foreground: '888888',
      token: 'markup.raw'
    },
    {
      foreground: '555555',
      token: 'markup.prompt'
    },
    {
      fontStyle: 'bold',
      token: 'markup.bold'
    },
    {
      foreground: 'aaaaaa',
      token: 'markup.heading'
    },
    {
      foreground: 'aa0000',
      token: 'markup.traceback'
    },
    {
      fontStyle: 'underline',
      token: 'markup.underline'
    },
    {
      background: 'eaf2f5',
      foreground: '999999',
      token: 'meta.diff.range'
    },
    {
      background: 'eaf2f5',
      foreground: '999999',
      token: 'meta.diff.index'
    },
    {
      background: 'eaf2f5',
      foreground: '999999',
      token: 'meta.separator'
    },
    {
      background: 'ffdddd',
      foreground: '999999',
      token: 'meta.diff.header.from-file'
    },
    {
      background: 'ddffdd',
      foreground: '999999',
      token: 'meta.diff.header.to-file'
    },
    {
      foreground: '4183c4',
      token: 'meta.link'
    }
  ]
}
