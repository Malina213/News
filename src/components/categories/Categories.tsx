import Slider from 'react-slick'
import { Button } from '../ui/button'
import styles from './Categories.module.css'
import type { CategoriesType } from '../../interfaces'
interface Props {
	categories: CategoriesType[]
	setSelectedCategory: (category: CategoriesType | null) => void
	selectedCategory: CategoriesType | null
}
export const Categories = ({
	categories,
	setSelectedCategory,
	selectedCategory
}: Props) => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToScroll: 3,
		swipeToSlide: true,
		arrows: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 480,
				settings: { slidesToShow: 1 }
			}
		]
	}

	return (
		<Slider {...settings} className={styles.categories__slider}>
			<div className={styles.categories__slide}>
				<Button
					className={
						!selectedCategory
							? `flex-center ${styles.category__active} ${styles.category__item}`
							: `flex-center ${styles.category__item}`
					}
					onClick={() => setSelectedCategory(null)}
				>
					All
				</Button>
			</div>
			{categories.map(category => (
				<div key={category} className={styles.categories__slide}>
					<Button
						className={
							selectedCategory === category
								? `flex-center ${styles.category__active} ${styles.category__item}`
								: `flex-center ${styles.category__item}`
						}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</Button>
				</div>
			))}
		</Slider>
	)
}
