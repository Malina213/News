import { PaginationButtons } from '../..'
import type { IPaginationProps } from '../../model/types'
import styles from './Pagination.module.css'

interface Props {
	children: React.ReactNode
	top?: boolean
	bottom?: boolean
	paginationProps: IPaginationProps
}

export const Pagination = ({
	top,
	bottom,
	children,
	paginationProps
}: Props) => {
	return (
		<div className={styles.paginationWrapper}>
			{top && <PaginationButtons {...paginationProps} />}
			{children}
			{bottom && <PaginationButtons {...paginationProps} />}
		</div>
	)
}
