import type { PaginationProps } from '../../interfaces'
import { Pagination } from '../pagination/Pagination'
import styles from './PaginationWrapper.module.css'

interface Props {
	children: React.ReactNode
	top?: boolean
	bottom?: boolean
	paginationProps: PaginationProps
}

export const PaginationWrapper = ({
	top,
	bottom,
	children,
	paginationProps
}: Props) => {
	return (
		<div className={styles.paginationWrapper}>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</div>
	)
}
