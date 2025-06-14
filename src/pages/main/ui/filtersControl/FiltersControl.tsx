import type { IFilters } from '@/shared/interfaces'
import { setFilters } from '@/entities/news/model/newsSlice'
import { useAppDispatch } from '@/app/appStore'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi'
import { SliderCategories } from '@/features/slider'
import { Search } from '@/features/search'
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
					<SliderCategories
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
