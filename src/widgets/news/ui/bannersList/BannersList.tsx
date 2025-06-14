import { NewsBanner, type INews } from '@/entities/news'
import { withSkeleton } from '@/shared/hock/withSkeleton'
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
