import { DateTimeDisplay } from '../DateTimeDisplay/DateTimeDisplay'
import { CheckboxThemes } from '../ui/checkboxThemes/CheckboxThemes'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Новости</h1>
			<DateTimeDisplay />
			<CheckboxThemes />
		</header>
	)
}
