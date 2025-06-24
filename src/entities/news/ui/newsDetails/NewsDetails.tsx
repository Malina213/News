import { ItemInfo } from '@/shared/ui/itemInfo/ItemInfo'
import type { INews } from '../../model/types'
import { Image } from '@/shared/ui/image/Image'
import { CategoriesButtons } from '@/features/category'
import { Link } from 'react-router'
import styles from './NewsDetails.module.css'

interface Props {
	item: INews
}
export const NewsDetails = ({ item }: Props) => {
	return (
		<div className={styles.details}>
			<Image image={item.image} />
			<div className={styles.description}>
				<p>
					{item.description} ({item.language})
					<a target='_blank' href={item.url}>
						official source
					</a>
				</p>
				<ItemInfo item={item} />
				<div className={styles.categories}>
					{item.category.map((category, index) => {
						return (
							<CategoriesButtons
								category={category}
								key={`${index}-${category}`}
							/>
						)
					})}
				</div>
				<Link to='/'> Вернуться назад</Link>
			</div>
		</div>
	)
}
