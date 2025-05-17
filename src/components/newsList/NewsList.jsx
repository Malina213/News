import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'

// eslint-disable-next-line no-undef
export default NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
