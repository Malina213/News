import { TOTAL_PAGES } from '../../../../shared/constants/constants'
import NewsList from '../../../../widgets/news/ui/newsList/NewsList'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { usePaginationHandlers } from '../../../../shared/hooks/usePaginationHandlers'
import { useAppSelector } from '@/app/appStore'
import { useGetNewsQuery } from '@/entities/news/api/newsApi'
import { Pagination } from '@/features/pagination'
import { FiltersControl } from '../filtersControl/FiltersControl'
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
			<Pagination
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
			</Pagination>
		</section>
	)
}
