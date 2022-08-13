import { useSDK } from '@contentful/react-apps-toolkit'
import { vi } from 'vitest'

import { DeepPartial } from '~/types/utils'

const mockSdk: DeepPartial<ReturnType<typeof useSDK>> = {
  access: {
    canEditAppConfig: vi.fn().mockResolvedValueOnce(null)
  },
  app: {
    getCurrentState: vi.fn(),
    getParameters: vi.fn().mockReturnValueOnce({}),
    onConfigure: vi.fn(),
    setReady: vi.fn()
  },
  field: {
    getValue: vi.fn(),
    setInvalid: vi.fn(),
    setValue: vi.fn()
  },
  ids: {
    app: 'test-app'
  }
}

export { mockSdk }
