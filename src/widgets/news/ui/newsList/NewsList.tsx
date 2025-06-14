import { NewsItem, type INews } from '@/entities/news'
import { withSkeleton } from '@/shared/hock/withSkeleton'
import styles from './NewsList.module.css'
interface Props {
	news?: INews[]
}
const NewsList = ({ news }: Props) => {
	return (
		<ul className={`${styles.list} no-select`}>
			{news?.map(item => <NewsItem item={item} key={item.id} />)}
		</ul>
	)
}
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 15)
export default NewsListWithSkeleton
