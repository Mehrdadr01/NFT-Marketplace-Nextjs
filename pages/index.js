import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            {/* move the header to _app.js so if we are any page we have our beautiful Header :D */}
            {/* <body className="dark:bg-slate-800 "></body> */}
            home
        </>
    )
}
