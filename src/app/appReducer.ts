import { combineReducers } from '@reduxjs/toolkit'
import newsReducer from '@/entities/news/model/newsSlice'
import themeReducer from '@/entities/theme/model/themeSlice'
import { newsApi } from '@/entities/news/api/newsApi'
import { categoriesApi } from '@/entities/category/api/categoriesApi'
export const rootReducer = combineReducers({
	news: newsReducer,
	theme: themeReducer,
	[newsApi.reducerPath]: newsApi.reducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer
})
