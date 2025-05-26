import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Button } from '../ui/button'
import styles from './Categories.module.css'

export const Categories = ({
	categories,
	setSelectedCategory,
	selectedCategory
}) => {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={10}
			slidesPerView='auto'
			className={styles.categories__swiper}
		>
			<SwiperSlide className={styles.categories__slide}>
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
			</SwiperSlide>

			{categories.map(category => (
				<SwiperSlide key={category} className={styles.categories__slide}>
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
				</SwiperSlide>
			))}
		</Swiper>
	)
}
