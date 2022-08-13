import {
  render as defaultRender,
  RenderOptions
} from '@testing-library/react'
import { ReactElement } from 'react'

export * from './mocks'

export const render = (
  ui: ReactElement,
  options?: RenderOptions
) => defaultRender(
  ui,
  options
)

export * from '@testing-library/react'
