import styles from './Pagination.module.css'
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { Button } from '../ui/button'
export const Pagination = ({
	totalPages,
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
				{[...Array(totalPages)].map((_, index) => {
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
				disabled={currentPage === totalPages}
				onClick={handleNextPage}
			>
				<SlArrowRight />
			</Button>
		</div>
	)
}
