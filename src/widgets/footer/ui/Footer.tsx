import { GiNewShoot } from 'react-icons/gi'
import styles from './Footer.module.css'
export const Footer = () => {
	return (
		<footer className={`${styles.footer} no-select`}>
			<GiNewShoot size={20} color={styles.footer__img} />
			<p>News by Malina</p>
		</footer>
	)
}
