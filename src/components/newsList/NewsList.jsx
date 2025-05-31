import { withSkeleton } from '../../helpers/hock/WithSkeleton'
import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'

const NewsList = ({ news }) => {
	return (
		<ul className={`${styles.list} no-select`}>
			{news?.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
export default NewsListWithSkeleton
