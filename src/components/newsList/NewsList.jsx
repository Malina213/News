import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'

const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
export default NewsList
