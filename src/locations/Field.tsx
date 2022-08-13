import { FieldExtensionSDK } from '@contentful/app-sdk'
import { Box } from '@contentful/f36-components'
import tokens from '@contentful/f36-tokens'
import { useAutoResizer, useSDK } from '@contentful/react-apps-toolkit'
import { css } from '@emotion/css'

import { Form } from '~/components/Form'

const Field = () => {
  useAutoResizer()
  const sdk = useSDK<FieldExtensionSDK>()

  return (
    <Box
      testId={sdk.ids.app}
    >
      <Form
        className={css({
          background: tokens.gray100,
          border: `1px solid ${tokens.gray300}`,
          padding: `${tokens.spacingM}`
        })}
        formData={sdk.field.getValue()}
        onChange={({ errors, formData }) => {
          if (errors.length > 0) {
            sdk.field.setInvalid(true)
          } else {
            sdk.field.setInvalid(false)
            sdk.field.setValue(formData)
          }
        }}
        schema={{
          // description: "A product from Acme's catalog",
          properties: {
            dimensions: {
              properties: {
                height: {
                  type: 'number'
                },
                length: {
                  type: 'number'
                },
                width: {
                  type: 'number'
                }
              },
              required: ['length', 'width', 'height'],
              type: 'object'
            },
            price: {
              description: 'The price of the product',
              exclusiveMinimum: 0,
              type: 'number'
            },
            productId: {
              description: 'The unique identifier for a product',
              type: 'integer'
            },
            productName: {
              description: 'Name of the product',
              type: 'string'
            },
            tags: {
              description: 'Tags for the product',
              items: {
                type: 'string'
              },
              minItems: 1,
              type: 'array',
              uniqueItems: true
            },
            warehouseLocation: {
              description:
              'Coordinates of the warehouse where the product is located.'
            }
          },
          required: ['productId', 'productName', 'price'],
          // title: 'Product',
          type: 'object'
        }}
      />
    </Box>
  )
}

export default Field
