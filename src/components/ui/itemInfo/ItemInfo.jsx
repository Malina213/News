import styles from './ItemInfo.module.css'
import { formateTimeAgo } from '../../../utils/formateTimeAgo'

export const ItemInfo = ({ item }) => {
	return (
		<>
			<h3 className={styles.info__title}>{item.title}</h3>
			<p className={styles.info__desc}>
				{formateTimeAgo(item.published)} by {item.author}
			</p>
		</>
	)
}
