import { useTheme } from '../../../context/ThemeContext'
import styles from './CheckboxThemes.module.css'

export const CheckboxThemes = () => {
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
					isDark ? styles.toggleCheckboxChecked : ''
				}`}
			>
				<div className={`flex-center ${styles.toggleButton}`}>
					<div className={styles.toggleButtonCirclesContainer}></div>
				</div>
			</div>
		</div>
	)
}
