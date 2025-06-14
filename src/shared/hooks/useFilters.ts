import { useState } from 'react'
import type { IFilters } from '../interfaces'

export const useFilters = (initialState: IFilters) => {
	const [filters, setFilters] = useState<IFilters>(initialState)

	const changeFilter = (key: string, value: string | number | null): void => {
		setFilters(prev => {
			return {
				...prev,
				[key]: value
			}
		})
	}
	return { filters, changeFilter }
}
