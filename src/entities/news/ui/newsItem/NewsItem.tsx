import { ItemInfo } from '@/shared/ui/itemInfo/ItemInfo'
import type { INews } from '../../model/types'
import styles from './NewsItem.module.css'

interface Props {
	item: INews
}
export const NewsItem = ({ item }: Props) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				style={{
					backgroundImage: `url(${
						item.image && item.image !== 'None'
							? item.image
							: '/images/notFoundImage.svg'
					})`
				}}
			></div>
			<div className={styles.item__info}>
				<ItemInfo item={item} />
			</div>
		</li>
	)
}
