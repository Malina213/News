import { apiNews } from '../../api/apiNews'
import { useState, useEffect } from 'react'
export const useNews = () => {
	const [news, setNews] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [isError, setError] = useState(false)

	useEffect(() => {
		const loadNews = async () => {
			try {
				setLoading(true)
				const data = await apiNews()
				setNews(data.news)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		}
		loadNews()
	}, [])

	return { news, isLoading, isError }
}
