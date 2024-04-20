import { ClerkProvider as Provider } from '@clerk/nextjs'
import type React from 'react'

/**
 * Clerk is a headless authentication and user management service.
 * @link https://clerk.com/docs
 */
export default function ClerkProvider({ children }: React.PropsWithChildren) {
  return <Provider>{children}</Provider>
}
