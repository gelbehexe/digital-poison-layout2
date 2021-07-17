import { onMounted, ref } from "vue"

export default function useTouchClick() {
    const currentTouchTarget = ref(null)

    function clearTouchActive() {
        document.querySelectorAll(".touch-click-active").forEach(el => {
            el.classList.remove("touch-click-active")
        })
    }


    function onTouchStart(ev) {
        // console.log("onTouchStart")
        clearTouchActive()
        // console.log("ev.target",ev.target)
        currentTouchTarget.value = ev.target.closest(".touch-click")
        // console.log("currentTouchTarget",currentTouchTarget.value)
        if (currentTouchTarget.value) {
            currentTouchTarget.value.classList.add("touch-click-active")
        }
    }

    function onTouchEnd() {
        // console.log("onTouchEnd")
        clearTouchActive()
    }

    onMounted(() => {
        document.addEventListener("touchstart", onTouchStart, { passive: true})
        document.addEventListener("touchend", onTouchEnd, { passive: true})
    })

}
