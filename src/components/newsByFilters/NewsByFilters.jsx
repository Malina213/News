import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import NewsList from '../newsList/NewsList'
import styles from './NewsByFilters.module.css'
import { FiltersControl } from '../filtersControl/filtersControl'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getNews } from '../../api/api'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PaginationWrapper } from '../paginationWrapper/PaginationWrapper'
import { paginationHandlers } from '../../utils/paginationHandlers'

export const NewsByFilters = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: ''
	})
	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords
	})
	const { handleNextPage, handlePreviousPage, handlePageClick } =
		paginationHandlers(filters, changeFilter, TOTAL_PAGES)

	return (
		<section className={styles.newsByFilters}>
			<FiltersControl filters={filters} changeFilter={changeFilter} />
			<PaginationWrapper
				top
				bottom
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}
