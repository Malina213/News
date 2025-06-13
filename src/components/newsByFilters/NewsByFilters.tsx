import { TOTAL_PAGES } from '../../constants/constants'
import NewsList from '../newsList/NewsList'
import { FiltersControl } from '../filtersControl/FiltersControl'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PaginationWrapper } from '../paginationWrapper/PaginationWrapper'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppSelector } from '../../store'
import { usePaginationHandlers } from '../../helpers/hooks/usePaginationHandlers'
import styles from './NewsByFilters.module.css'

export const NewsByFilters = () => {
	const filters = useAppSelector(state => state.news.filters)
	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords
	})

	const { handleNextPage, handlePreviousPage, handlePageClick } =
		usePaginationHandlers(filters, TOTAL_PAGES)

	return (
		<section className={styles.newsByFilters}>
			<FiltersControl filters={filters} />
			<PaginationWrapper
				top
				bottom
				paginationProps={{
					handlePageClick,
					handlePreviousPage,
					handleNextPage,
					currentPage: filters.page_number,
					totalPages: TOTAL_PAGES
				}}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}
