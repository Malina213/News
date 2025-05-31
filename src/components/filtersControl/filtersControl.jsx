import { getCategories } from '../../api/api'
import { useFetch } from '../../helpers/hooks/useFetch'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import styles from './FiltersControl.module.css'

export const FiltersControl = ({ filters, changeFilter }) => {
	const { data: dataCategories } = useFetch(getCategories)
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
