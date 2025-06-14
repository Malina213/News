import { Outlet } from 'react-router'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import styles from './Layout.module.css'
export const Layout = () => {
	return (
		<div className={`app `}>
			<Header />
			<div className={styles.container}>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
