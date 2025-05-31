// import { FiltersControl } from '../filtersControl/FiltersControl'
import { TOTAL_PAGES } from '../../constants/constants'
import { Pagination } from '../pagination/Pagination'
import NewsList from '../newsList/NewsList'
import styles from './NewsByFilters.module.css'

export const NewsByFilters = ({ filters, isLoading, changeFilter, news }) => {
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
	return (
		<section className={styles.newsByFilters}>
			{/* <FiltersControl filters={filters} changeFilter={changeFilter} /> */}

			<Pagination
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>

			<NewsList isLoading={isLoading} news={news} />

			<Pagination
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
		</section>
	)
}
