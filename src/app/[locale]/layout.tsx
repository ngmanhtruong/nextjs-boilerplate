import type { Metadata } from 'next'
import MUIProvider from '@/providers/MUIProvider'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { AppConfig } from '@/utils/AppConfig'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Mystict Boilerplate',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  console.log({ locale })
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) notFound()

  // Using internationalization in Client Components
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body>
        <MUIProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </MUIProvider>
      </body>
    </html>
  )
}
