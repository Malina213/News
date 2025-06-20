import type { IFilters } from '../interfaces'
import { setFilters } from '../../entities/news/model/newsSlice'
import { useAppDispatch } from '@/app/appStore'

export const usePaginationHandlers = (
	filters: IFilters,
	totalPages: number
) => {
	const dispatch = useAppDispatch()

	const setPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			dispatch(setFilters({ key: 'page_number', value: page }))
		}
	}

	const handleNextPage = () => {
		if (filters.page_number < totalPages) {
			setPage(filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			setPage(filters.page_number - 1)
		}
	}

	const handlePageClick = (pageNumber: number) => {
		setPage(pageNumber)
	}

	return {
		handleNextPage,
		handlePreviousPage,
		handlePageClick
	}
}
