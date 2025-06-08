import { DateTimeDisplay } from '../dateTimeDisplay/DateTimeDisplay'
import { CheckboxThemes } from '../ui/checkboxThemes/CheckboxThemes'
import { Logo } from '../ui/logo/Logo'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={`${styles.header} no-select `}>
			<Logo />
			<DateTimeDisplay />
			<CheckboxThemes />
		</header>
	)
}
