import type { DirectionType, SkeletonType } from '@/shared/interfaces'
import styles from './Skeleton.module.css'

interface Props {
	type?: SkeletonType
	count?: number
	direction?: DirectionType
}
export const Skeleton = ({
	count = 1,
	type = 'banner',
	direction = 'column'
}: Props) => {
	return (
		<>
			{count > 1 ? (
				<ul
					className={
						direction === 'column' ? styles.columnList : styles.rowList
					}
				>
					{[...Array(count)].map((_, index) => (
						<li
							key={index}
							className={type === 'banner' ? styles.banner : styles.item}
						></li>
					))}
				</ul>
			) : (
				<div className={type === 'banner' ? styles.banner : styles.item}></div>
			)}
		</>
	)
}
