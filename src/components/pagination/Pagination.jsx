import styles from './Pagination.module.css'
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { Button } from '../ui/button'
import { TOTAL_PAGES } from '../../constants/constants'
export const Pagination = ({
	handlePageClick,
	handlePreviousPage,
	handleNextPage,
	currentPage
}) => {
	return (
		<div className={`flex-center ${styles.pagination}`}>
			<Button
				className={styles.pagination__prev}
				disabled={currentPage === 1}
				onClick={handlePreviousPage}
			>
				<SlArrowLeft />
			</Button>
			<div className={`flex-center ${styles.pagination__numbers}`}>
				{[...Array(TOTAL_PAGES)].map((_, index) => {
					return (
						<Button
							onClick={() => handlePageClick(index + 1)}
							key={index}
							disabled={index + 1 === currentPage}
							className={styles.pagination__button}
						>
							{index + 1}
						</Button>
					)
				})}
			</div>
			<Button
				className={styles.pagination__next}
				disabled={currentPage === TOTAL_PAGES}
				onClick={handleNextPage}
			>
				<SlArrowRight />
			</Button>
		</div>
	)
}
