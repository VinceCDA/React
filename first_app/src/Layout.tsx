import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'

function Layout() {


    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout