import type { DirectionType, SkeletonType } from '../interfaces'
import { Skeleton } from '../ui/skeleton/Skeleton'
interface Props {
	isLoading: boolean
}
export function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,
	type?: SkeletonType,
	count?: number,
	direction?: DirectionType
) {
	return function WithSkeleton(props: Props & P) {
		const { isLoading, ...restProps } = props
		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />
		}
		return <Component {...(restProps as P)} />
	}
}
