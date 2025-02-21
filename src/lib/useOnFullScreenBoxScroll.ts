import { throttle } from "lodash"
import { useEffect, useState } from "react"

export const useFullScreenBoxScroll = () => {
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const fullScreenBox = document.getElementById("full-screen-box")
    if (!fullScreenBox) return
    const onScroll = () => {
      const scrollY = fullScreenBox.scrollTop
      setTranslateY(scrollY)
    }
    fullScreenBox.addEventListener("scroll", onScroll)
    return () => fullScreenBox.removeEventListener("scroll", onScroll)
  }, [])
  return { scrollTop: translateY }
}
