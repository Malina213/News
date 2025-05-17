import { useNews } from '../../utils/hooks/useNews'
import { NewsBanner } from '../newsBanner/NewsBanner'
import { NewsList } from '../newsList/NewsList'

export const Home = () => {
	const { news } = useNews()

	return (
		<section>
			{news?.length > 0 ? <NewsBanner banner={news[0]} /> : null}
			<NewsList news={news} />
		</section>
	)
}
