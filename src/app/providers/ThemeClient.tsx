import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

const ThemeClient = ({ children }: { children: ReactNode}) => {
  return (
    <ThemeProvider storageKey="theme" attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default ThemeClient