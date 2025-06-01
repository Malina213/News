import { LatestsNews } from '../../latestsNews/LatestsNews'
import { NewsByFilters } from '../../newsByFilters/NewsByFilters'
import styles from './Home.module.css'

export const Home = () => {
	return (
		<main className={styles.home}>
			<LatestsNews />
			<NewsByFilters />
		</main>
	)
}
