import styles from './Pagination.module.css'
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
export const Pagination = ({
	totalPages,
	handlePageClick,
	handlePreviousPage,
	handleNextPage,
	currentPage
}) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.pagination__prev}
				disabled={currentPage === 1}
				onClick={handlePreviousPage}
			>
				{<SlArrowLeft />}
			</button>
			<div className={styles.pagination__numbers}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							key={index}
							disabled={index + 1 === currentPage}
							className={styles.pagination__button}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button
				className={styles.pagination__next}
				disabled={currentPage === totalPages}
				onClick={handleNextPage}
			>
				<SlArrowRight />
			</button>
		</div>
	)
}
