import { withSkeleton } from '../../helpers/hock/WithSkeleton'
import { Image } from '../ui/image/Image'
import { ItemInfo } from '../ui/itemInfo/ItemInfo'
import styles from './NewsBanner.module.css'

export const NewsBanner = ({ banner }) => {
	return (
		<div className={styles.banner}>
			<Image image={banner.image} />
			<ItemInfo item={banner} />
		</div>
	)
}
const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)
export default NewsBannerWithSkeleton
