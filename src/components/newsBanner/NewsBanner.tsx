import { withSkeleton } from '../../helpers/hock/withSkeleton'
import type { INews } from '../../interfaces'
import { Image } from '../ui/image/Image'
import { ItemInfo } from '../ui/itemInfo/ItemInfo'
import styles from './NewsBanner.module.css'
interface Props {
	item: INews
}
export const NewsBanner = ({ item }: Props) => {
	return (
		<div className={styles.banner}>
			<Image image={item?.image} />
			<ItemInfo item={item} />
		</div>
	)
}
const NewsBannerWithSkeleton = withSkeleton<Props>(NewsBanner, 'banner', 1)
export default NewsBannerWithSkeleton
