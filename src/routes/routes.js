import { Layout } from '../components/layout/Layout'
import { Home } from '../components/page/Home'
import { createBrowserRouter } from 'react-router'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ index: true, element: <Home /> }]
	}
])
