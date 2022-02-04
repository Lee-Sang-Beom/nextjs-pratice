import Head from "next/head"
import React from "react"
import Nav from "./Nav"

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>My Blog</title> 
            </Head>
            <Nav/>
            <div>
                {children}
            </div>
        </>
    )
}