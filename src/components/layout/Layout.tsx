import { Header } from '../header/Header'
import { Outlet } from 'react-router'
import { Footer } from '../footer/Footer'
import styles from './Layout.module.css'
export const Layout = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
