import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CodeEditor } from './CodeEditor'

export default {
  component: CodeEditor
} as Meta

export const Primary: Story = (args) => (
  <CodeEditor
    code={'code'}
  />
)
