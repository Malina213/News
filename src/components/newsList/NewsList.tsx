import { withSkeleton } from '../../helpers/hock/withSkeleton'
import type { INews } from '../../interfaces'
import { NewsItem } from '../newsItem/NewsItem'
import styles from './NewsList.module.css'
interface Props {
	news?: INews[]
}
const NewsList = ({ news }: Props) => {
	return (
		<ul className={`${styles.list} no-select`}>
			{news?.map(item => (
				<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)
export default NewsListWithSkeleton
