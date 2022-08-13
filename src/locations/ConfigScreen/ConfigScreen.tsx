import { AppExtensionSDK } from '@contentful/app-sdk'
import { Box, Card, Tabs } from '@contentful/f36-components'
import { Workbench } from '@contentful/f36-workbench'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useCallback, useEffect, useState } from 'react'

import { AppParameters, Tab } from '../types'
import { Configuration } from './tabs/Configuration'
import { Documentation } from './tabs/Documentation'
import { Feedback } from './tabs/Feedback'

const tabs: Tab[] = [
  {
    Component: Configuration,
    id: 'configuration',
    title: 'Configuration'
  },
  {
    Component: Documentation,
    id: 'documentation',
    title: 'Documentation'
  },
  {
    Component: Feedback,
    id: 'feedback',
    title: 'Feedback'
  }
]

const ConfigScreen = () => {
  const [parameters, setParameters] = useState<AppParameters>({})
  const sdk = useSDK<AppExtensionSDK>()

  const onConfigure = useCallback(async () => {
    // This method will be called when a user clicks on "Install"
    // or "Save" in the configuration screen.
    // for more details see https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#register-an-app-configuration-hook

    // Get current the state of EditorInterface and other entities
    // related to this app installation
    const currentState = await sdk.app.getCurrentState()

    return {
      // Parameters to be persisted as the app configuration.
      parameters,
      // In case you don't want to submit any update to app
      // locations, you can just pass the currentState as is
      targetState: currentState
    }
  }, [parameters, sdk])

  useEffect(() => {
    // `onConfigure` allows to configure a callback to be
    // invoked when a user attempts to install the app or update
    // its configuration.
    sdk.app.onConfigure(() => onConfigure())
  }, [sdk, onConfigure])

  useEffect(() => {
    (async () => {
      // Get current parameters of the app.
      // If the app is not installed yet, `parameters` will be `null`.
      const currentParameters: AppParameters | null =
        await sdk.app.getParameters()

      if (currentParameters) {
        setParameters(currentParameters)
      }

      // Once preparation has finished, call `setReady` to hide
      // the loading screen and present the app to a user.
      sdk.app.setReady()
    })()
  }, [sdk])

  return (
    <Workbench
      testId={sdk.ids.app}
    >
      <Workbench.Content
        type="text"
      >
        <Card>
          <Tabs
            defaultTab="configuration"
          >
            <Tabs.List
              variant="horizontal-divider"
            >
              {tabs.map(({ id, title }) => (
                <Tabs.Tab
                  key={id}
                  panelId={id}
                >
                  {title}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            {tabs.map(({ Component, id }) => (
              <Tabs.Panel
                id={id}
                key={id}
              >
                <Box
                  paddingTop="spacingL"
                >
                  <Component
                    parameters={parameters}
                    sdk={sdk}
                  />
                </Box>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Card>
      </Workbench.Content>
    </Workbench>
  )
}

export default ConfigScreen
