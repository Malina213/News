import { GiNewShoot } from 'react-icons/gi'
import styles from './logo.module.css'
import { Link } from 'react-router'
export const Logo = () => {
	return (
		<Link to='/' className={styles.logo}>
			<h1 className={styles.logo__title}>News</h1>
			<GiNewShoot size={32} color={styles.logo__img} />
		</Link>
	)
}
