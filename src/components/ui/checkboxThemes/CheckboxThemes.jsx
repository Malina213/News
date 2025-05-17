import { useState } from 'react'
import styles from './CheckboxThemes.module.css'

export function CheckboxThemes() {
	const [checked, setChecked] = useState(false)

	return (
		<div className={styles.toggleWrapper}>
			<input
				type='checkbox'
				className={styles.toggleCheckbox}
				checked={checked}
				onChange={() => setChecked(!checked)}
				id='toggle'
			/>
			<div
				className={`${styles.toggleContainer} ${
					checked ? styles.toggleCheckboxChecked : ''
				}`}
			>
				<div className={styles.toggleButton}>
					<div className={styles.toggleButtonCirclesContainer}></div>
				</div>
			</div>
		</div>
	)
}
