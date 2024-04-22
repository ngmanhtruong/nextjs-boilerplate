import { render, screen } from 'test.utils'
import LocaleSwitcher from './LocaleSwitcher'

jest.mock('@/libs/i18nNavigation', () => ({
  usePathname: jest.fn().mockReturnValue({
    pathname: jest.fn().mockReturnValue('/'),
  }),
  useRouter: jest.fn().mockReturnValue({
    router: jest.fn(),
  }),
  useLocale: jest.fn().mockReturnValue('en'),
}))

jest.spyOn(console, 'error').mockImplementation()

describe('LocaleSwitcher', () => {
  test('renders the component correctly', () => {
    render(<LocaleSwitcher />)
    expect(screen.getByTestId('locale-switcher-select')).toBeInTheDocument()
    // Add assertions to check the rendering of the component
  })
})
