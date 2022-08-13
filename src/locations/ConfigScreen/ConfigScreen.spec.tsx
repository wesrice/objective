import { describe, expect, it, vi } from 'vitest'

import { mockCma, mockSdk, render } from '~/test'

import ConfigScreen from './ConfigScreen'

vi.mock('@contentful/react-apps-toolkit', () => ({
  useCMA: () => mockCma,
  useSDK: () => mockSdk
}))

describe('Config Screen component', () => {
  it('Component text exists', async () => {
    const { getByTestId } = render(<ConfigScreen />)

    expect(getByTestId('test-app')).toBeTruthy()
  })
})
