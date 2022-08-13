import { Meta, Story } from '@storybook/react'

import { Form, FormProps } from './Form'
import { CodeEditorWidget } from './widgets'

const withForm = (schema: FormProps<any>['schema']) => (
  <Form<any>
    schema={schema}
  >
    <></>
  </Form>
)

export default {
  component: CodeEditorWidget
} as Meta

export const Primary: Story = (args) => withForm({
  properties: {
    foo: {
      title: 'Foo',
      type: 'string'
    }
  },
  type: 'object'
})
