import { useFetch } from '../../helpers/hooks/useFetch'
import NewsBanner from '../newsBanner/NewsBanner'
import NewsList from '../newsList/NewsList'
import { Pagination } from '../pagination/Pagination'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import { TOTAL_PAGES, PAGE_SIZE } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { getCategories, getNews } from '../../api/api'
import { useFilters } from '../../helpers/hooks/useFilters'

export const Home = () => {
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
	const { data: dataCategories } = useFetch(getCategories)

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
		<section>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={filters.category}
					setSelectedCategory={category => changeFilter('category', category)}
				/>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				banner={data && data.news && data.news[0]}
			/>

			<Pagination
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
			<NewsList isLoading={isLoading} news={data && data.news} />

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
