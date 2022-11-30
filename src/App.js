import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

const App = () => {
  return <div>{useRoutes(routes)}</div>
}

export default App
