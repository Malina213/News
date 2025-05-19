import { useNews } from '../../utils/hooks/useNews'
import { NewsBanner } from '../newsBanner/NewsBanner'
import { NewsList } from '../newsList/NewsList'
import { Skeleton } from '../skeleton/Skeleton'

export const Home = () => {
	const { news, isLoading } = useNews()

	return (
		<section>
			{!isLoading && news.length > 0 ? (
				<NewsBanner banner={news[0]} />
			) : (
				<Skeleton type='banner' count={1} />
			)}

			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton type='item' count={10} />
			)}
		</section>
	)
}
