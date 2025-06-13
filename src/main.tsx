import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes/Router'
import { ThemeProvider } from './context/ThemeContext'
import './assets/styles/index.css'
import { Provider } from 'react-redux'
import { store } from './store/index'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<Router />
			</Provider>
		</ThemeProvider>
	</StrictMode>
)
