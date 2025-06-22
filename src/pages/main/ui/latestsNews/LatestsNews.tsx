import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi'
import { BannersList } from '@/widgets/news/ui'
import styles from './LatestsNews.module.css'
import type { INews } from '@/entities/news'
import { useAppDispatch } from '@/app/appStore'
import { setCurrentNews } from '@/entities/news/model/newsSlice'
import { useNavigate } from 'react-router'
import { IconButton } from '@/shared/ui/button/IconButton'

export const LatestsNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news))
		navigate(`/news/:${news.id}`)
	}

	return (
		<section className={`${styles.section} no-select`}>
			<BannersList
				banners={data?.news}
				isLoading={isLoading}
				viewNewsSlot={(banner: INews) => (
					<IconButton onClick={() => navigateTo(banner)} />
				)}
			/>
		</section>
	)
}
