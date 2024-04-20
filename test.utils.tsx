import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import MUIProvider from '@/providers/MUIProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <MUIProvider>{children}</MUIProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
