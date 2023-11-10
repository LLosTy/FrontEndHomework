// ./src/components/Layout.js

import { Outlet } from "react-router-dom"
import Navbar from './navbar.jsx';
import { Suspense } from "react"
// import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>                
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            {/* <Footer /> */}
        </>
    )
}