import { useFetch } from '../../../helpers/hooks/useFetch'
import { PAGE_SIZE } from '../../../constants/constants'
import { useDebounce } from '../../../helpers/hooks/useDebounce'
import { getNews } from '../../../api/api'
import { useFilters } from '../../../helpers/hooks/useFilters'
import { LatestsNews } from '../../latestsNews/LatestsNews'
import { NewsByFilters } from '../../newsByFilters/NewsByFilters'
import styles from './Home.module.css'

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

	return (
		<main className={styles.home}>
			<LatestsNews isLoading={isLoading} banners={data?.news} />
			<NewsByFilters
				isLoading={isLoading}
				filters={filters}
				changeFilter={changeFilter}
				news={data?.news}
			/>
		</main>
	)
}
