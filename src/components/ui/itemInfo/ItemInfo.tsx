import styles from './ItemInfo.module.css'
import { formateTimeAgo } from '../../../utils/formateTimeAgo'
import type { INews } from '../../../interfaces'
interface ItemInfoProps {
	item: INews
}

export const ItemInfo = ({ item }: ItemInfoProps) => {
	return (
		<>
			<h3 className={styles.info__title}>{item.title}</h3>
			<p className={styles.info__desc}>
				{formateTimeAgo(item.published)} by {item.author}
			</p>
		</>
	)
}
