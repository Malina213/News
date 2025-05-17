import { formateTimeAgo } from '../../utils/formateTimeAgo'
import styles from './NewsItem.module.css'

export const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className={styles.item__info}>
				<h3 className={styles.item__title}>{item.title}</h3>
				<p className={styles.item__desc}>
					{formateTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}
