import { RouterProvider } from 'react-router'
import { router } from './routes'

export const Router = () => {
	return <RouterProvider router={router} />
}
