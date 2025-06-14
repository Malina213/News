import { useState, useEffect } from 'react'
import styles from './DateTimeDisplay.module.css'
import { formateDate, formateTime } from '@/shared/utils/formateDate'

export const DateTimeDisplay = () => {
	const [now, setNow] = useState(new Date())

	useEffect(() => {
		const timerId = setInterval(() => {
			setNow(new Date())
		}, 1000)

		return () => clearInterval(timerId)
	}, [])

	return (
		<div className={`flex-center ${styles.dateTimeDisplay}`}>
			<span className={styles.time}>{formateTime(now)}</span>
			<p className={styles.date}>{formateDate(now)}</p>
		</div>
	)
}
