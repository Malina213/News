import BannersList from '../bannersList/BannersList'
import styles from './LatestsNews.module.css'

export const LatestsNews = ({ banners, isLoading }) => {
	return (
		<section className={`${styles.section} no-select`}>
			<BannersList banners={banners} isLoading={isLoading} />
		</section>
	)
}
