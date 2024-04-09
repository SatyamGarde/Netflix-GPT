import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
const Home = () => {
  return (
    <h1>This is home</h1>
  )
}

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home /> 
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
