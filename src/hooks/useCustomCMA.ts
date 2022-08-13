import { useSDK } from '@contentful/react-apps-toolkit'
import { createClient, PlainClientAPI } from 'contentful-management'
import { useMemo } from 'react'

export function useCustomCMA (): PlainClientAPI {
  const sdk = useSDK()

  const cma = useMemo(() => {
    return createClient(
      { apiAdapter: sdk.cmaAdapter },
      {
        defaults: {
          environmentId: sdk.ids.environmentAlias ?? sdk.ids.environment,
          organizationId: sdk.ids.organization,
          spaceId: sdk.ids.space
        },
        type: 'plain'
      }
    )
  }, [
    sdk.cmaAdapter,
    sdk.ids.environment,
    sdk.ids.environmentAlias,
    sdk.ids.organization,
    sdk.ids.space
  ])

  return cma
}
