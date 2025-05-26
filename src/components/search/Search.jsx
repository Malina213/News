import styles from './Search.module.css'
export const Search = ({ keywords, setKeywords }) => {
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
