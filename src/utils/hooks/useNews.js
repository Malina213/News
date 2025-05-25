import { getNews } from '../../api/api'
import { useState, useEffect } from 'react'
export const useNews = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const totalPages = 10
	const pageSize = 10

	const loadNews = async currentPage => {
		try {
			setIsLoading(true)
			const data = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory
			})
			setNews(data.news)
			setIsLoading(false)
		} catch (error) {
			setIsError(error)
		}
	}

	useEffect(() => {
		loadNews(currentPage)
	}, [currentPage, selectedCategory])

	return {
		news,
		isLoading,
		isError,
		totalPages,
		currentPage,
		setCurrentPage,
		selectedCategory,
		setSelectedCategory
	}
}
