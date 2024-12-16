import {Home, Md, Nackademin} from '@pages' /* ../pages/index.ts */
import {RouteObject, createBrowserRouter} from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/md',
    element: <Md />,
  },
  {
    path: '/nackademin',
    element: <Nackademin />,
  },
]

export default createBrowserRouter(routes)
