export const formateDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	return date.toLocaleDateString('ru', options)
}

export const formateTime = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	}
	return date.toLocaleTimeString('ru', options)
}
