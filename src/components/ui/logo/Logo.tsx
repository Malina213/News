import { GiNewShoot } from 'react-icons/gi'
import styles from './logo.module.css'
export const Logo = () => {
	return (
		<a href='#!' className={styles.logo}>
			<h1 className={styles.logo__title}>News</h1>
			<GiNewShoot size={32} color='cadetblue' />
		</a>
	)
}
