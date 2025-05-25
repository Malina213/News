import { useState } from 'react'
import styles from './CheckboxThemes.module.css'

export const CheckboxThemes = () => {
	const [checked, setChecked] = useState(false)

	return (
		<div className={`flex-center ${styles.toggleWrapper}`}>
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
				<div className={`flex-center ${styles.toggleButton}`}>
					<div className={styles.toggleButtonCirclesContainer}></div>
				</div>
			</div>
		</div>
	)
}
