import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home/Home.tsx'
//import App from './App.tsx'
import './index.css'
import About from './components/About/About.tsx'
import User from './components/User/User.tsx'
import Github, {githubInfoLoader } from './components/Github/Github.tsx'
import Login from './components/Login/Login.tsx'
import Profile from './components/Profile/Profile.tsx'
import UserContextProvider from './context/UserContextProvider.tsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='user/' element={<User />}>
                <Route path=':userid' element={<User />}/>
            </Route>
            <Route loader={githubInfoLoader} path='github' element={<Github />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>       
    </React.StrictMode>,
)
