import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi'
import { BannersList } from '@/widgets/news/ui'
import styles from './LatestsNews.module.css'

export const LatestsNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	return (
		<section className={`${styles.section} no-select`}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
