import { Layout } from '../components/layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from '../components/page/Home'

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
