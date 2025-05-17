import notFound from '/public/images/notFoundImage.svg'
import styles from './Image.module.css'
export const Image = ({ image }) => {
	return (
		<div className={styles.wrapper}>
			{image ? (
				<img src={image} alt='news' />
			) : (
				<img src={notFound} alt='not Found' />
			)}
		</div>
	)
}
