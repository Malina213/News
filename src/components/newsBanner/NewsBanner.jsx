import { formateTimeAgo } from '../../utils/formateTimeAgo'
import { Image } from '../ui/image/Image'
import styles from './NewsBanner.module.css'

export const NewsBanner = ({ banner }) => {
	return (
		<div className={styles.banner}>
			<Image image={banner.image} />
			<h3 className={styles.banner__title}>{banner.title}</h3>
			<p className={styles.banner__desc}>
				{formateTimeAgo(banner.published)} by {banner.author}
			</p>
		</div>
	)
}
