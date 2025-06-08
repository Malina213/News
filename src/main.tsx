import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes/Router'
import { ThemeProvider } from './context/ThemeContext'
import './assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</StrictMode>
)
