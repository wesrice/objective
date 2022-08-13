import { describe, expect, it, vi } from 'vitest'

import { mockCma, mockSdk, render } from '~/test'

import Field from './Field'

vi.mock('@contentful/react-apps-toolkit', () => ({
  useAutoResizer: vi.fn(),
  useCMA: () => mockCma,
  useSDK: () => mockSdk
}))

describe('Field component', () => {
  it('Component text exists', () => {
    const { getByTestId } = render(<Field />)

    expect(getByTestId('test-app')).toBeTruthy()
  })
})
