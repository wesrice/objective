import { locations } from '@contentful/app-sdk'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useMemo } from 'react'

import ConfigScreen from '~/locations/ConfigScreen/ConfigScreen'
import Dialog from '~/locations/Dialog'
import Field from '~/locations/Field'
import Page from '~/locations/Page'

const ComponentLocationSettings = Object.entries({
  [locations.LOCATION_APP_CONFIG]: ConfigScreen,
  [locations.LOCATION_DIALOG]: Dialog,
  [locations.LOCATION_ENTRY_FIELD]: Field,
  [locations.LOCATION_PAGE]: Page
})

const App = () => {
  const sdk = useSDK()

  const Component = useMemo(() => {
    for (const [location, component] of ComponentLocationSettings) {
      if (sdk.location.is(location)) {
        return component
      }
    }
  }, [sdk.location])

  return Component ? <Component /> : null
}

export default App
