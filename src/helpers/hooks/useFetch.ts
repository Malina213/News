import { useState, useEffect } from 'react'
interface FetchFunction<P, T> {
	(params?: P): Promise<T>
}
interface UseFetchResult<T> {
	data: T | null | undefined
	isLoading: boolean
	error: Error | null
}
export const useFetch = <T, P>(
	fetchFunction: FetchFunction<P, T>,
	params?: P
): UseFetchResult<T> => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setIsError] = useState<Error | null>(null)

	const stringParams = params ? new URLSearchParams(params).toString() : 'null'

	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				const result = await fetchFunction(params)
				setData(result)
			} catch (error) {
				setIsError(error as Error)
			} finally {
				setIsLoading(false)
			}
		})()
	}, [fetchFunction, stringParams])

	return { data, isLoading, error }
}
