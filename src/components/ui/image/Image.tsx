import notFound from '/public/images/notFoundImage.svg'
import styles from './Image.module.css'
interface Props {
	image: string
}
export const Image = ({ image }: Props) => {
	return (
		<div className={styles.wrapper}>
			{image && image != 'None' ? (
				<img src={image} alt='news' />
			) : (
				<img src={notFound} alt='not Found' />
			)}
		</div>
	)
}
