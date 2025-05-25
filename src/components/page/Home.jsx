import { useNews } from '../../utils/hooks/useNews'
import { useCategories } from '../../utils/hooks/useCategories'
import { NewsBanner } from '../newsBanner/NewsBanner'
import { NewsList } from '../newsList/NewsList'
import { Skeleton } from '../skeleton/Skeleton'
import { Pagination } from '../pagination/Pagination'
import { Categories } from '../categories/Categories'

export const Home = () => {
	const {
		news,
		isLoading,
		totalPages,
		currentPage,
		setCurrentPage,
		selectedCategory,
		setSelectedCategory
	} = useNews()
	const { categories } = useCategories()
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePageClick = pageNumber => {
		if (pageNumber >= 1) {
			setCurrentPage(pageNumber)
		}
	}
	return (
		<section>
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			{!isLoading && news.length > 0 ? (
				<NewsBanner banner={news[0]} />
			) : (
				<Skeleton type='banner' count={1} />
			)}
			<Pagination
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton type='item' count={10} />
			)}
			<Pagination
				handlePageClick={handlePageClick}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</section>
	)
}
