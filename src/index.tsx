import '@styles/index.css'

import routes from '@routes'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {QueryClientProvider} from '@tanstack/react-query'
import {StrictMode} from 'react'
import {QUERY_CLIENT} from '@utils'
import {DEV, MODE, PROD} from './env'
import {ErrorBoundary} from 'react-error-boundary'
// import ErrorFallback from './components/errorFallback'

const root = createRoot(document.getElementById('root')!)
if (!PROD && DEV) document.title = document.title + ' (' + MODE + ')'
root.render(
  <StrictMode>
    {/* <ErrorBoundary */}
    {/* // FallbackComponent={ErrorFallback} */}
    {/* // onReset={() => window.location.replace('/')} */}
    {/* fallback={<div>Something went wrong</div>} */}
    {/* > */}
    <QueryClientProvider client={QUERY_CLIENT}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
    {/* </ErrorBoundary> */}
  </StrictMode>,
)
