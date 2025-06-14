import { LatestsNews } from './latestsNews/LatestsNews'
import { NewsByFilters } from './newsByFilters/NewsByFilters'
import styles from './styles.module.css'

const Home = () => {
	return (
		<main className={styles.home}>
			<LatestsNews />
			<NewsByFilters />
		</main>
	)
}
export default Home
