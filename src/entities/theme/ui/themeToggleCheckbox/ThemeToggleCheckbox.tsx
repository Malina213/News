import styles from './ThemeToggleCheckbox.module.css'
import { useAppDispatch, useAppSelector } from '@/app/appStore'
import { toggleTheme } from '../../model/themeSlice'

export const ThemeToggleCheckbox = () => {
	const dispatch = useAppDispatch()
	const isDark = useAppSelector(state => state.theme.isDark)

	return (
		<div className={`flex-center ${styles.toggleWrapper}`}>
			<input
				type='checkbox'
				className={styles.toggleCheckbox}
				checked={isDark}
				onChange={() => dispatch(toggleTheme())}
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
