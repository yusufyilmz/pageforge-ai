import '@pageforge/once-ui/styles/index.scss'
import '@pageforge/once-ui/tokens/index.scss'

import { GenericLayout } from '@pageforge/components/layout/Layout'
import { UserProvider } from '../contexts/UserContext'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <UserProvider>
      {/* <ThemeProvider> */}
      <GenericLayout theme="dark">{children}</GenericLayout>
      {/* </ThemeProvider> */}
    </UserProvider>
  )
}
