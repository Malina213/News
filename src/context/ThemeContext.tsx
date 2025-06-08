import {
	createContext,
	useState,
	useEffect,
	type ReactNode,
	useContext
} from 'react'

interface IThemeContext {
	isDark: boolean
	toggleTheme: () => void
}

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = () => {
		setIsDark(prev => !prev)
	}

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			isDark ? 'dark' : 'light'
		)
	}, [isDark])

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
