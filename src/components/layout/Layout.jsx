import { Header } from '../header/Header'
import { Outlet } from 'react-router'
import styles from './Layout.module.css'
import { Footer } from '../footer/Footer'
export const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.container}>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
