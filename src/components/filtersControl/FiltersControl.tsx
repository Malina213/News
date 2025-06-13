import type { IFilters } from '../../interfaces'
import { useAppDispatch } from '../../store'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import styles from './filtersControl.module.css'

interface Props {
	filters: IFilters
}
export const FiltersControl = ({ filters }: Props) => {
	const { data } = useGetCategoriesQuery(null)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.filtersControl}>
			{data && (
				<div className={styles.slider}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category =>
							dispatch(setFilters({ key: 'category', value: category }))
						}
					/>
				</div>
			)}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	)
}
