import { apiNews } from '../../api/apiNews'
import { useState, useEffect } from 'react'
export const useNews = () => {
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const loadNews = async () => {
			setLoading(true)
			try {
				const data = await apiNews()
				console.log(data.news)
				setNews(data.news)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		loadNews()
	}, [])

	return { news, loading, error }
}
