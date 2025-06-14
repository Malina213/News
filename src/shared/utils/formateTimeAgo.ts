export const formateTimeAgo = (dataString: string) => {
	const dateNow = new Date()
	const date = new Date(dataString)
	const secondPast = (dateNow.getTime() - date.getTime()) / 1000

	if (secondPast < 60) {
		return `${Math.floor(secondPast)}s ago`
	}
	if (secondPast < 3660) {
		return `${Math.floor(secondPast / 60)}s ago`
	}
	if (secondPast <= 86400) {
		return `${Math.floor(secondPast / 360)}s ago`
	}
	if (secondPast > 60) {
		const day = Math.floor(secondPast / 86400)
		return day === 1 ? `${day} day ago ` : `${day} days ago`
	}
}
