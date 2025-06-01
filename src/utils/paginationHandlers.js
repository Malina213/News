export const paginationHandlers = (filters, changeFilter, TOTAL_PAGES) => {
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

	const handlePageClick = pageNumber => {
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
