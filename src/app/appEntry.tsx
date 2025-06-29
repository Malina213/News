import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './appRouter'
import { StoreProvider } from './providers/StoreProvider'
import { ThemeHandler } from '@/entities/theme/ui/themeHandlers/ThemeHandlers'
import '../shared/assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<ThemeHandler>
				<Router />
			</ThemeHandler>
		</StoreProvider>
	</StrictMode>
)
