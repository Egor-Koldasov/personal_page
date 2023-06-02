import { useState } from "react"
import "../styles/main.scss"
import type { AppProps } from "next/app"
import { LoadingCat } from "../components/CatLoading/CatLoading"
import localFont from "next/font/local"

const int = setInterval(() => {
  if (!document) return
  console.log("document.fonts.status", document.fonts.status)
}, 50)

setTimeout(() => {
  clearInterval(int)
}, 2000)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <LoadingCat /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
