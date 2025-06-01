import { getLatestNews } from '../../api/api'
import { useFetch } from '../../helpers/hooks/useFetch'
import BannersList from '../bannersList/BannersList'
import styles from './LatestsNews.module.css'

export const LatestsNews = () => {
	const { data, isLoading } = useFetch(getLatestNews)
	return (
		<section className={`${styles.section} no-select`}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
