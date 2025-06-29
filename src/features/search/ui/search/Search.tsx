import styles from './Search.module.css'
interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}
export const Search = ({ keywords, setKeywords }: Props) => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				className={styles.input}
				placeholder='Search...'
				autoComplete='off'
			/>
		</div>
	)
}
