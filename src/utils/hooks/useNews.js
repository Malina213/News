import { getNews } from '../../api/api'
import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'
export const useNews = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [keywords, setKeywords] = useState('')
	const debouncedKeywords = useDebounce(keywords, 1500)
	const totalPages = 10
	const pageSize = 10

	const loadNews = async currentPage => {
		try {
			setIsLoading(true)
			const data = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory,
				keywords: debouncedKeywords
			})
			setNews(data.news)
			setIsLoading(false)
		} catch (error) {
			setIsError(error)
		}
	}

	useEffect(() => {
		loadNews(currentPage)
	}, [currentPage, selectedCategory, debouncedKeywords])

	return {
		news,
		isLoading,
		isError,
		totalPages,
		currentPage,
		setCurrentPage,
		selectedCategory,
		setSelectedCategory,
		keywords,
		setKeywords
	}
}
