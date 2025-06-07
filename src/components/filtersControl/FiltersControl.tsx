import { getCategories } from '../../api/api'
import { useFetch } from '../../helpers/hooks/useFetch'
import type { CategoriesApiResponse, IFilters } from '../../interfaces'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import styles from './filtersControl.module.css'

interface Props {
	filters: IFilters
	changeFilter: (key: string, value: string | number | null) => void
}
export const FiltersControl = ({ filters, changeFilter }: Props) => {
	const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
		getCategories
	)

	return (
		<div className={styles.filtersControl}>
			{dataCategories && (
				<div className={styles.slider}>
					<Categories
						categories={dataCategories.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category => changeFilter('category', category)}
					/>
				</div>
			)}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
