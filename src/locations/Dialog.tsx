import { DialogExtensionSDK } from '@contentful/app-sdk'
import { Box, Grid, Tabs } from '@contentful/f36-components'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useState } from 'react'

import { CodeEditor } from '~/components/CodeEditor'
import { Form, JSONSchema } from '~/components/Form'

import type { FieldConfiguration } from './types'

const defaultSchema: JSONSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  properties: {},
  type: 'object'
}

type FormData = Partial<FieldConfiguration>

const Dialog = () => {
  const sdk = useSDK<DialogExtensionSDK>()
  const [formData, setFormData] = useState<FormData>(
    sdk.parameters.invocation as unknown as FormData
  )

  return (
    <>
      <Grid
        columnGap="spacingL"
        columns="1fr 1fr"
        padding="spacingL"
        style={{
          gridTemplateAreas: `
            'form output'
          `
        }}
      >
        <Grid.Item
          style={{
            gridArea: 'form'
          }}
        >
          <Form<FormData>
            formData={formData}
            onChange={({ errors, formData }: any) => {
              if (errors.length > 0) {
              // handle invalid
                console.log('errors', errors)
              } else {
              // handle valid
                setFormData(formData)
                console.log('formData', formData)
              }
            }}
            schema={{
              // $schema: 'https://json-schema.org/draft/2020-12/schema',
              properties: {
                id: {
                  type: 'string'
                },
                jsonSchema: {
                  title: 'JSON Schema',
                  type: 'string'
                }
              },
              type: 'object'
            }}
            uiSchema={{
              id: { 'ui:widget': 'hidden' },
              jsonSchema: { 'ui:widget': 'CodeEditorWidget' }
            }}
          >
            <></>
          </Form>
        </Grid.Item>

        <Grid.Item
          style={{
            gridArea: 'output'
          }}
        >
          <Tabs
            defaultTab="form-output"
          >
            <Tabs.List
              variant="horizontal-divider"
            >
              <Tabs.Tab
                panelId="form-output"
              >
                Form Output
              </Tabs.Tab>
              <Tabs.Tab
                panelId="json-output"
              >
                JSON Output
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel
              id="form-output"
            >
              <Box
                paddingTop={'spacingL'}
              >
                <Form<any>
                  formData={{}}
                  schema={JSON.parse(formData.jsonSchema || '{}')}
                >
                  <></>
                </Form>
              </Box>
            </Tabs.Panel>
            <Tabs.Panel
              id="json-output"
            >
              <Box
                paddingTop={'spacingL'}
              >
                <CodeEditor
                  code={JSON.stringify(formData.jsonSchema, null, 2)}
                  readOnly
                />
              </Box>
            </Tabs.Panel>
          </Tabs>
        </Grid.Item>
      </Grid>
    </>
  )
}

export default Dialog
