import Slider from 'react-slick'
import type { CategoriesType } from '@/entities/category'
import { CategoriesButtons } from '@/features/category/ui/categoriesButtons/CategoriesButtons'
import styles from './SliderCategories.module.css'

interface Props {
	categories: CategoriesType[]
	selectedCategory: CategoriesType | null
	setSelectedCategory: (category: CategoriesType | null) => void
}

export const SliderCategories = ({
	categories,
	selectedCategory,
	setSelectedCategory
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
			{ breakpoint: 1024, settings: { slidesToShow: 3 } },
			{ breakpoint: 768, settings: { slidesToShow: 2 } },
			{ breakpoint: 480, settings: { slidesToShow: 1 } }
		]
	}

	return (
		<Slider {...settings} className={styles.categories__slider}>
			<div className={styles.categories__slide}>
				<CategoriesButtons
					category={null}
					isSelected={!selectedCategory}
					onSelect={setSelectedCategory}
				/>
			</div>
			{categories.map(category => (
				<div key={category} className={styles.categories__slide}>
					<CategoriesButtons
						category={category}
						isSelected={selectedCategory === category}
						onSelect={setSelectedCategory}
					/>
				</div>
			))}
		</Slider>
	)
}
