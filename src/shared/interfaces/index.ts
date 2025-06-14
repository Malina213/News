import type { CategoriesType } from '@/entities/category'
import type { INews } from '@/entities/news'

export interface IFilters {
	page_number: number
	page_size: number
	category: CategoriesType | null
	keywords: string
}
export interface IBanner {
	description: string
	id: string
	image: string
	title: string
	url: string
}

export type ParamsType = Partial<IFilters>
export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'
export type ItemType = INews & IBanner
