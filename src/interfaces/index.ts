export interface INews {
	author: string
	category: CategoriesType[]
	description: string
	id: string
	image: string
	language: string
	published: string
	title: string
	url: string
}
export interface NewsApiResponse {
	news: INews[]
	page: number
	status: string
}
export interface CategoriesApiResponse {
	categories: CategoriesType[]
	description: string
	status: string
}
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
export interface PaginationProps {
	handlePageClick: (pageNumber: number) => void
	handlePreviousPage: () => void
	handleNextPage: () => void
	currentPage: number
	totalPages: number
}

export type ParamsType = Partial<IFilters>
export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'
export type ItemType = INews & IBanner
export type CategoriesType =
	| 'regional'
	| 'technology'
	| 'lifestyle'
	| 'business'
	| 'general'
	| 'programming'
	| 'science'
	| 'entertainment'
	| 'world'
	| 'sports'
	| 'finance'
	| 'academia'
	| 'politics'
	| 'health'
	| 'opinion'
	| 'food'
	| 'game'
	| 'fashion'
	| 'academic'
	| 'crap'
	| 'travel'
	| 'culture'
	| 'economy'
	| 'environment'
	| 'art'
	| 'music'
	| 'notsure'
	| 'CS'
	| 'education'
	| 'redundant'
	| 'television'
	| 'commodity'
	| 'movie'
	| 'entrepreneur'
	| 'review'
	| 'auto'
	| 'energy'
	| 'celebrity'
	| 'medical'
	| 'gadgets'
	| 'design'
	| 'EE'
	| 'security'
	| 'mobile'
	| 'estate'
	| 'funny'
