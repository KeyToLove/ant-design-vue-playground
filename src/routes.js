import Playground from './genPlayground'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavLink className="list-group-item" to="/button">
        Button
      </NavLink>
      <NavLink className="list-group-item" to="/modal">
        Modal
      </NavLink>
    </>
  )
}

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/button',
    element: <Playground path="components/Button/index" />,
  },
  {
    path: '/modal',
    element: <Playground path="components/Modal/index" />,
  },
]

export default routes
