import { withSkeleton } from '../../../../shared/hock/withSkeleton'
import { Image } from '@/shared/ui/image/Image'
import type { INews } from '../../model/types'
import { ItemInfo } from '@/shared/ui/itemInfo/ItemInfo'
import styles from './NewsBanner.module.css'
import type { ReactNode } from 'react'
interface Props {
	item: INews
	viewNewsSlot: (news: INews) => ReactNode
}
export const NewsBanner = ({ item, viewNewsSlot }: Props) => {
	return (
		<div className={styles.banner}>
			<Image image={item?.image} />
			<ItemInfo item={item} />
			{viewNewsSlot(item)}
		</div>
	)
}
const NewsBannerWithSkeleton = withSkeleton<Props>(NewsBanner, 'banner', 1)
export default NewsBannerWithSkeleton
