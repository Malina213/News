import type { IFilters } from '../interfaces'
import { setFilters } from '../../entities/news/model/newsSlice'
import { useAppDispatch } from '@/app/appStore'
import { TOTAL_PAGES } from '../constants/constants'

export const usePaginationHandlers = (filters: IFilters) => {
	const dispatch = useAppDispatch()

	const setPage = (page_number: number) => {
		if (page_number >= 1 && page_number <= TOTAL_PAGES) {
			dispatch(setFilters({ key: 'page_number', value: page_number }))
		}
	}

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			setPage(filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			setPage(filters.page_number - 1)
		}
	}

	const handlePageClick = (page_number: number) => {
		if (page_number >= 1 && page_number <= TOTAL_PAGES) {
			dispatch(setFilters({ key: 'page_number', value: page_number }))
		}
	}

	return {
		handleNextPage,
		handlePreviousPage,
		handlePageClick
	}
}
