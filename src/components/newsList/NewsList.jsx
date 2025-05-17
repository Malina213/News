import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'

export const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
