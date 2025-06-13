import { LatestsNews } from '../../components/latestsNews/LatestsNews'
import { NewsByFilters } from '../../components/newsByFilters/NewsByFilters'
import { useAppSelector } from '../../store'
import styles from './Home.module.css'

export const Home = () => {
	const news = useAppSelector(state => state.news.news)
	return (
		<main className={styles.home}>
			<LatestsNews />
			<NewsByFilters />
		</main>
	)
}
