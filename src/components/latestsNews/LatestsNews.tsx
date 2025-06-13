import { useGetLatestNewsQuery } from '../../store/services/newsApi'
import BannersList from '../bannersList/BannersList'
import styles from './LatestsNews.module.css'

export const LatestsNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	return (
		<section className={`${styles.section} no-select`}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
