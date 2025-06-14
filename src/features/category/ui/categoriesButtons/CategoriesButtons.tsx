import { Button } from '@/shared/ui/button'
import type { CategoriesType } from '@/entities/category'
import styles from './CategoriesButtons.module.css'

interface CategoriesButtonsProps {
	category: CategoriesType | null
	isSelected: boolean
	onSelect: (category: CategoriesType | null) => void
}

export const CategoriesButtons = ({
	category,
	isSelected,
	onSelect
}: CategoriesButtonsProps) => {
	const label = category ?? 'All'

	const className = isSelected
		? `flex-center ${styles.category__active} ${styles.category__item}`
		: `flex-center ${styles.category__item}`

	return (
		<Button className={className} onClick={() => onSelect(category)}>
			{label}
		</Button>
	)
}
