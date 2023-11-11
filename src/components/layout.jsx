// ./src/components/Layout.js

import { Outlet } from "react-router-dom"
import Navbar from './navbar.jsx';
import { Suspense } from "react"
// import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <main>                
                <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
                    <Outlet />
                </Suspense>
            </main>
            {/* <Footer /> */}
        </>
    )
}