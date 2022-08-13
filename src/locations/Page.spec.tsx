import { describe, expect, it, vi } from 'vitest'

import { render } from '~/test'

import { mockCma, mockSdk } from '../test/mocks'
import Page from './Page'

vi.mock('@contentful/react-apps-toolkit', () => ({
  useCMA: () => mockCma,
  useSDK: () => mockSdk
}))

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByTestId } = render(<Page />)

    expect(getByTestId('test-app')).toBeTruthy()
  })
})
