import { useAppSelector } from '@/app/appStore'
import styles from './styles.module.css'
import { NewsDetails } from '@/entities/news/ui/newsDetails/NewsDetails'

const NewsPage = () => {
	const currentNews = useAppSelector(state => state.news.currentNews)
	if (!currentNews) {
		return <main className={styles.newsPage}>Новость не выбрана</main>
	}
	return (
		<main className={styles.newsPage}>
			<NewsDetails item={currentNews} />
		</main>
	)
}
export default NewsPage
