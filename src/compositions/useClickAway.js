import {onMounted, onUnmounted} from "vue"
import useDebounce from "./useDebounce"

// noinspection JSValidateJSDoc
/**
 * @param {Function} cb
 * @param {ToRef<HTMLElement?>|ToRef<HTMLElement?>[]|Function|Function[]} excludedTargets
 * @param {String[]} events
 * @param {String[]} debouncedEvents
 */
export default function useClickAway(cb = () => {}, excludedTargets = [], events = ["click", "resize"], debouncedEvents = ["resize"]) {
    const debounce = useDebounce()

    if (!Array.isArray(excludedTargets)) {
        excludedTargets = [excludedTargets]
    }

    /**
         *
         * @param {HTMLElement} el
         */
    function isExcludedTarget(el) {
        for(let idx=0; idx < excludedTargets.length; idx++) {
            let excludedTarget
            if (typeof excludedTargets[idx] === "function") {
                excludedTarget = excludedTargets[idx]()
            } else {
                excludedTarget = excludedTargets[idx].value
            }

            if (!excludedTarget) {
                continue
            }

            if (excludedTarget === el) {
                return true
            }
            if (excludedTarget.contains(el)) {
                return true
            }
        }
        return false
    }

    /**
         *
         * @param {UIEvent} ev
         * @private
         */
    function _handleEvent(ev) {
        if (ev.target instanceof HTMLElement && isExcludedTarget(ev.target)) {
            return
        }

        cb(ev)
    }


    /**
         * @param {UIEvent} ev
         */
    function handleEvent(ev) {
        if (debouncedEvents.includes(ev.type)) {
            debounce(() => _handleEvent(ev))
            return
        }

        _handleEvent(ev)
    }

    onMounted(() => {
        events.forEach(event => {
            window.addEventListener(event, handleEvent, {passive: true})
        })
    })

    onUnmounted(() => {
        events.forEach(event => {
            // noinspection JSCheckFunctionSignatures
            window.removeEventListener(event, handleEvent, {passive: true})
        })
    })

}
