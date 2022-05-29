import Head from "next/head"
import React from "react"
import HeadInfo from "./HeadInfo"
import Nav from "./Nav"

export default function Layout({children}) {
    return (
        <>
            <HeadInfo title="MY BLOG"/>
            <Nav/>
            <div>
                {children}
            </div>
        </>
    )
}