import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from '../layouts/Layout'
import Home from '@/pages/main/ui/Page'

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
