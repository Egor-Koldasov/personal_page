import localFont from "next/font/local"

import { ReactNode } from "react"

const noto = localFont({
  src: [
    {
      path: "../font/NotoSansMono/NotoSansMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/NotoSansMono/NotoSansMono-Bold.ttf",
      weight: "700",
      style: "italic",
    },
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={noto.className}>
      <body>{children}</body>
    </html>
  )
}
