import type { IFilters } from '../interfaces'

export const paginationHandlers = (
	filters: IFilters,
	changeFilter: (key: keyof IFilters, value: IFilters[keyof IFilters]) => void,
	TOTAL_PAGES: number
) => {
	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = (pageNumber: number) => {
		if (pageNumber >= 1) {
			changeFilter('page_number', pageNumber)
		}
	}

	return {
		handleNextPage,
		handlePreviousPage,
		handlePageClick
	}
}
