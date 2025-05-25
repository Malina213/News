import { useState, useEffect } from 'react'
import { getCategories } from '../../api/api'

export const useCategories = () => {
	const [categories, setCategories] = useState([])
	const [isLoadingCategories, setIsLoadingCategories] = useState(true)
	const [isErrorCategories, setIsErrorCategories] = useState(false)

	const loadCategories = async () => {
		try {
			setIsLoadingCategories(true)
			const data = await getCategories()
			setCategories(['All', ...data.categories])
			setIsLoadingCategories(false)
		} catch (error) {
			setIsErrorCategories(error)
			setIsLoadingCategories(false)
		}
	}

	useEffect(() => {
		loadCategories()
	}, [])

	return { categories, isErrorCategories, isLoadingCategories }
}
