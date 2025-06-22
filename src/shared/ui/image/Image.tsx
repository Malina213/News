import notFound from '/public/images/notFoundImage.svg'
import styles from './Image.module.css'
import { useState } from 'react'
interface Props {
	image?: string | null
	alt?: string
}

export const Image = ({ image, alt = 'image' }: Props) => {
	const [src, setSrc] = useState(image && image !== 'None' ? image : notFound)

	const handleError = () => {
		setSrc(notFound)
	}

	return (
		<div className={styles.wrapper}>
			<img src={src} alt={alt} onError={handleError} />
		</div>
	)
}
