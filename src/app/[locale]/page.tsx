import { Box, Typography } from '@mui/material'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Mystict Next.js Boilerplate',
  description:
    'Starter code for your Next.js Boilerplate with MUI CSS and multi-language support.',
  keywords: 'mystict, boilerplate, nextjs, css, typescript',
}
export default function Home() {
  const t = useTranslations('Dashboard')
  return (
    <main>
      <Box>
        <Typography>{t('meta_title')}</Typography>
      </Box>
    </main>
  )
}
