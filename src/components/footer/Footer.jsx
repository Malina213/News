import styles from './Footer.module.css'
import { GiNewShoot } from 'react-icons/gi'
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<GiNewShoot size={20} color='cadetblue' />
			<p>News by Malina</p>
		</footer>
	)
}
