import { ItemInfo } from '../ui/itemInfo/ItemInfo'
import styles from './NewsItem.module.css'

export const NewsItem = ({ item }) => {
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
