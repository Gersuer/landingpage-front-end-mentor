import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import Signin from './pages/signIn/Signin'
import Features from './pages/features/Features'
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/features',
        element: <Features />
      },
      {
        path: '/signin',
        element: <Signin />
      }
    ]
  }
])

export { router }