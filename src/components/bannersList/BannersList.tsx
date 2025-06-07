import { withSkeleton } from '../../helpers/hock/withSkeleton'
import type { INews } from '../../interfaces'
import { NewsBanner } from '../newsBanner/NewsBanner'
import styles from './BannersList.module.css'
interface Props {
	banners?: INews[] | null
}
const BannersList = ({ banners }: Props) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return <NewsBanner key={banner.id} item={banner} />
			})}
		</ul>
	)
}
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')
export default BannersListWithSkeleton
