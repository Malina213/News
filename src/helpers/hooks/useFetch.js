import { useState, useEffect } from 'react'

export const useFetch = (fetchFunction, params) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const stringParams = params ? new URLSearchParams(params).toString() : 'null'

	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				const result = await fetchFunction(params)
				setData(result)
			} catch (error) {
				setIsError(error)
			} finally {
				setIsLoading(false)
			}
		})()
	}, [fetchFunction, stringParams])

	return { data, isLoading, isError }
}
