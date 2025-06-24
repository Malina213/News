import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/pages/main/ui/Page'
import { NewsPage } from '@/pages/news'
import { Layout } from './layouts/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <div>Error</div>,
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/news/:id', element: <NewsPage /> }
		]
	}
])

export const Router = () => {
	return <RouterProvider router={router} />
}
