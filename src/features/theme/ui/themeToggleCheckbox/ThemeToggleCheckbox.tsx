import { useTheme } from '@/app/providers/ThemeProvider'
import styles from './ThemeToggleCheckbox.module.css'

export const ThemeToggleCheckbox = () => {
	const { isDark, toggleTheme } = useTheme()

	return (
		<div className={`flex-center ${styles.toggleWrapper}`}>
			<input
				type='checkbox'
				className={styles.toggleCheckbox}
				checked={isDark}
				onChange={toggleTheme}
				id='toggle'
			/>
			<div
				className={`${styles.toggleContainer} ${
					isDark ? '' : styles.toggleCheckboxChecked
				}`}
			>
				<div className={`flex-center ${styles.toggleButton}`}>
					<div className={styles.toggleButtonCirclesContainer}></div>
				</div>
			</div>
		</div>
	)
}
