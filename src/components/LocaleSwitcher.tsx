'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/libs/i18nNavigation'
import { AppConfig } from '@/utils/AppConfig'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChange = (event: SelectChangeEvent<string>) => {
    router.push(pathname, { locale: event.target.value })
    router.refresh()
  }

  return (
    <Select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
      data-testid="locale-switcher-select"
    >
      {AppConfig.locales.map((elt) => (
        <MenuItem key={elt} value={elt}>
          {elt.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  )
}
