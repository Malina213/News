import { createSlice } from '@reduxjs/toolkit'
import type { ThemeState } from './types'

const initialState: ThemeState = {
	isDark: false
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.isDark = !state.isDark
		},
		setTheme(state, action: { payload: boolean }) {
			state.isDark = action.payload
		}
	}
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
