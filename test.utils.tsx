import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import MUIProvider from '@/providers/MUIProvider'
import { NextIntlClientProvider } from 'next-intl'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MUIProvider>
      <NextIntlClientProvider locale="en">{children}</NextIntlClientProvider>
    </MUIProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
