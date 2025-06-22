import { Button } from '@/shared/ui/button/Button'
import type { IPaginationProps } from '../../model/types'
import styles from './PaginationButtons.module.css'

export const PaginationButtons = ({
	handlePageClick,
	handlePreviousPage,
	handleNextPage,
	currentPage,
	totalPages
}: IPaginationProps) => {
	return (
		<div className={`flex-center ${styles.pagination}`}>
			<Button
				className={styles.pagination__prev}
				disabled={currentPage === 1}
				onClick={handlePreviousPage}
			>
				{`<`}
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
				{`>`}
			</Button>
		</div>
	)
}
