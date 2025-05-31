import { withSkeleton } from '../../helpers/hock/withSkeleton'
import { NewsBanner } from '../newsBanner/NewsBanner'
import styles from './BannersList.module.css'

const BannersList = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return <NewsBanner key={banner.id} banner={banner} />
			})}
		</ul>
	)
}
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')
export default BannersListWithSkeleton
