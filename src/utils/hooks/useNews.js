import { apiNews } from '../../api/apiNews'
import { useState, useEffect } from 'react'
export const useNews = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	const loadNews = async currentPage => {
		try {
			setIsLoading(true)
			const data = await apiNews(currentPage, pageSize)
			setNews(data.news)
			setIsLoading(false)
		} catch (error) {
			setIsError(error)
		}
	}

	useEffect(() => {
		loadNews(currentPage)
	}, [currentPage])

	return { news, isLoading, isError, totalPages, currentPage, setCurrentPage }
}
