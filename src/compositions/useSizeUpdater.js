import useDebounce from "./useDebounce"
import {onMounted, onUnmounted} from "vue"

export default function useSizeUpdater() {
    let pageHeader, pageFooter, mainNav, headerResizeObserver, footerResizeObserver

    const debounce = useDebounce()

    function apply() {
        let maxHeight = window.innerHeight

        if (pageHeader) {
            maxHeight -= pageHeader.clientHeight

        }
        if (pageFooter) {
            maxHeight -= pageFooter.clientHeight
        }

        document.documentElement.style.setProperty("--ham-menu-max-height", maxHeight + "px")
    }

    function resizeHandler() {
        debounce(() => {
            apply()
        })
    }

    function transitionHandler(ev) {
        console.log("transitionHandler", ev)
    }

    onMounted(() => {
        pageHeader = document.querySelector(".page__header")
        pageFooter = document.querySelector(".page__footer")
        mainNav = document.querySelector(".main-nav")

        if (pageHeader) {
            headerResizeObserver = new ResizeObserver(apply)
            headerResizeObserver.observe(pageHeader)
        }
        if (pageFooter) {
            footerResizeObserver = new ResizeObserver(apply)
            footerResizeObserver.observe(pageFooter)
        }

        window.addEventListener("resize",resizeHandler)

        mainNav.addEventListener("transition", transitionHandler)

        apply()
        // updateHeight()
    })

    onUnmounted(() => {
        if (headerResizeObserver) {
            headerResizeObserver.unobserve(pageHeader)
        }
        if (footerResizeObserver) {
            footerResizeObserver.unobserve(pageHeader)
        }

        mainNav.removeEventListener("transition",transitionHandler)

        window.removeEventListener("resize", resizeHandler)

    })

}
