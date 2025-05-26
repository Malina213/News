import { withSkeleton } from '../../helpers/hock/withSkeleton'
import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'

const NewsList = ({ news }) => {
	if (!news) return null

	return (
		<ul className={styles.list}>
			{news.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
export default NewsListWithSkeleton
