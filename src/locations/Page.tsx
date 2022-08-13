import { PageExtensionSDK } from '@contentful/app-sdk'
import {
  DisplayText,
  Flex,
  IconButton,
  Table,
  TextLink
} from '@contentful/f36-components'
import { DeleteIcon, EditIcon } from '@contentful/f36-icons'
import { Workbench, WorkbenchHeaderProps } from '@contentful/f36-workbench'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useEffect, useMemo, useState } from 'react'

import { useCustomCMA } from '~/hooks/useCustomCMA'

const Page = () => {
  const sdk = useSDK<PageExtensionSDK>()
  const [canEditAppConfig, setCanEditAppConfig] = useState(false)

  useEffect(() => {
    sdk.access.canEditAppConfig()
      .then(() => {
        setCanEditAppConfig(true)
      })
  }, [sdk.access])

  const actions = useMemo<WorkbenchHeaderProps['actions'][]>(() => {
    const actions = []

    if (canEditAppConfig) {
      actions.push(
        <TextLink
          href={`https://app.contentful.com/spaces/${sdk.ids.space}/apps/${sdk.ids.app}`}
          key="view-settings"
        >
          View settings
        </TextLink>
      )
    }

    return actions
  }, [canEditAppConfig, sdk.ids.app, sdk.ids.space])

  const cma = useCustomCMA()

  useEffect(() => {
    if (sdk.ids.app) {
      cma.appInstallation.get({
        appDefinitionId: sdk.ids.app
      })
        .then((data) => {
          console.log(data)
        })
    }
  }, [
    cma.appInstallation,
    cma.entry,
    sdk.ids.app,
    sdk.ids.environment,
    sdk.ids.space
  ])

  // cma.space.getMany({}).then((data) => console.log(data))
  // cma.appInstallation.upsert({
  //   spaceId: sdk.ids.space,
  //   environmentId: sdk.ids.environment,
  // }, {
  //   parameters: []
  // })

  return (
    <Workbench
      testId={sdk.ids.app}
    >
      <Workbench.Header
        actions={actions}
        title="Json Editor"
      />
      <Workbench.Content>
        <Flex
          flexDirection="column"
        >
          <DisplayText>Field Configurations</DisplayText>
        </Flex>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Config ID</Table.Cell>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Content Type Usage</Table.Cell>
              <Table.Cell
                align="right"
              >
              </Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Foo</Table.Cell>
              <Table.Cell>Foo</Table.Cell>
              <Table.Cell>Foo</Table.Cell>
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
                    variant="secondary"
                  />
                  <IconButton
                    aria-label="Edit config"
                    icon={<DeleteIcon />}
                    variant="secondary"
                  />
                </Flex>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </Workbench.Content>
      <Workbench.Sidebar
        position="left"
      >
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Config</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Foo</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Workbench.Sidebar>

    </Workbench>
  )
}

export default Page
