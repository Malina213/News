import { useEffect, type ReactNode } from 'react'
import { useAppSelector } from '@/app/appStore'

interface ThemeHandlerProps {
	children: ReactNode
}

export const ThemeHandler = ({ children }: ThemeHandlerProps) => {
	const isDark = useAppSelector(state => state.theme.isDark)

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			isDark ? 'dark' : 'light'
		)
	}, [isDark])

	return <>{children}</>
}
