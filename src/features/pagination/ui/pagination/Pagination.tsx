import { PaginationButtons } from '../..'
import type { IPaginationProps } from '../../model/types'

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
		<>
			{top && <PaginationButtons {...paginationProps} />}
			{children}
			{bottom && <PaginationButtons {...paginationProps} />}
		</>
	)
}
