import { SerializedJSONValue } from '@contentful/app-sdk'
import { Button, Flex, IconButton, Table } from '@contentful/f36-components'
import { DeleteIcon, EditIcon } from '@contentful/f36-icons'
import React from 'react'

import { FieldConfiguration, TabProps } from '~/locations/types'

export const Configuration: React.VFC<TabProps> = ({
  parameters,
  sdk
}) => {
  const openDialog = (formData: Partial<FieldConfiguration>) => {
    sdk.dialogs.openCurrentApp({
      minHeight: '90vh',
      parameters: formData as SerializedJSONValue,
      width: 'fullWidth'
    })
  }

  const fieldConfigurations = parameters.fieldConfigurations || []

  return (
    <>
      {fieldConfigurations.length === 0
        ? (
          <Button
            onClick={() => openDialog({})}
          >
            Add
          </Button>
        )
        : (
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Config ID</Table.Cell>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell
                  align="right"
                >
                </Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {fieldConfigurations.map(({ id, jsonSchema, title }) => (
                <Table.Row
                  key={id}
                >
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{title}</Table.Cell>
                  <Table.Cell
                    align="right"
                  >
                    <Flex
                      flexDirection="row"
                      gap="spacingS"
                      justifyContent="end"
                    >
                      <IconButton
                        aria-label="Edit config"
                        icon={<EditIcon />}
                        onClick={() => openDialog({
                          id,
                          jsonSchema,
                          title
                        })}
                        variant="secondary"
                      />
                      <IconButton
                        aria-label="Delete config"
                        icon={<DeleteIcon />}
                        variant="secondary"
                      />
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
    </>
  )
}
