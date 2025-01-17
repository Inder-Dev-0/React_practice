import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './router/App.jsx'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList, { postLoader } from './components/PostList.jsx'

const route = createBrowserRouter([
  { path: '/', element: <App/>, children: [
    { path: '/', element: <PostList/>, loader: postLoader},
    { path: '/create-post', element: <CreatePost/>, action: createPostAction},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
