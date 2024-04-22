import { Box, Typography } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mystict Next.js Boilerplate',
  description:
    'Starter code for your Next.js Boilerplate with MUI CSS and multi-language support.',
  keywords: 'mystict, boilerplate, nextjs, css, typescript',
}
export default function Home() {
  return (
    <main>
      <Box>
        <Typography>Welcome</Typography>
      </Box>
    </main>
  )
}
