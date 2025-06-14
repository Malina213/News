export interface IPaginationProps {
	handlePageClick: (pageNumber: number) => void
	handlePreviousPage: () => void
	handleNextPage: () => void
	currentPage: number
	totalPages: number
}
