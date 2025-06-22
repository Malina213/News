import { NewsBanner, type INews } from '@/entities/news'
import { withSkeleton } from '@/shared/hock/withSkeleton'
import styles from './BannersList.module.css'
import type { ReactNode } from 'react'
interface Props {
	banners?: INews[] | null
	viewNewsSlot: (news: INews) => ReactNode
}
const BannersList = ({ banners, viewNewsSlot }: Props) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return (
					<NewsBanner
						viewNewsSlot={viewNewsSlot}
						key={banner.id}
						item={banner}
					/>
				)
			})}
		</ul>
	)
}
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')
export default BannersListWithSkeleton
