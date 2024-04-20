import type React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles'

const theme = extendTheme({
  cssVarPrefix: 'md-demo',
})

export default function MUIProvider({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </AppRouterCacheProvider>
  )
}
