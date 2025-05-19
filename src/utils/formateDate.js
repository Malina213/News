export const formateDate = date => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	return date.toLocaleDateString('ru', options)
}

export const formateTime = date => {
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	}
	return date.toLocaleTimeString('ru', options)
}
