import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/pages/main/ui/Page'
import { Layout } from '../layouts/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ index: true, element: <Home /> }]
	}
])

export const Router = () => {
	return <RouterProvider router={router} />
}
