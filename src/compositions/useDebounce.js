import {ref} from "vue"

export default function useDebounce() {
    const timeoutInstance = ref(null)

    function debounce(cb = () => {}, timeout = 500) {
        clearTimeout(timeoutInstance.value)

        timeoutInstance.value = setTimeout(cb, timeout)
    }

    return debounce
}
