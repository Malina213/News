import { Header } from '../header/Header'
import { Outlet } from 'react-router'
import styles from './Layout.module.css'
export const Layout = () => {
	return (
		<div>
			<Header />
			<main className={styles.container}>
				<Outlet />
			</main>
		</div>
	)
}
