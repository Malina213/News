import styles from './ItemInfo.module.css'
import { formateTimeAgo } from '../../../shared/utils/formateTimeAgo'
import type { INews } from '@/entities/news'

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
