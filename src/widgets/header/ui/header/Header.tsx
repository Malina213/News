import { DateTimeDisplay } from '@/shared/ui/dateTimeDisplay/DateTimeDisplay'
import { Logo } from '@/shared/ui/logo/Logo'
import { ThemeToggleCheckbox } from '@/entities/theme'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={`${styles.header} no-select `}>
			<Logo />
			<DateTimeDisplay />
			<ThemeToggleCheckbox />
		</header>
	)
}
