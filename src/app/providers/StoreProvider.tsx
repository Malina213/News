import { Provider } from 'react-redux'
import type { ReactNode } from 'react'
import { store } from '../appStore'

interface StoreProviderProps {
	children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
	return <Provider store={store}>{children}</Provider>
}
