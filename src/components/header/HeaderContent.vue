<template>
    <div class="header-content">
        <hamburger
            :open="hamburgerOpen"
            @toggle="toggleHamburgerOpen"
        />
        <nav
            class="main-nav nav"
            :class="{
                'main-nav--open': hamburgerOpen,
            }"
        >
            <div class="main-nav__quicksearch">
                <quick-search-form ref="quickSearchRef" />
            </div>
            <main-nav-list
                :open-sub-id="openSubId"
                @toggle-sub-id="toggleSubId"
            />
        </nav>
    </div>
</template>

<script>
import Hamburger from "../nav/header/Hamburger"
import {ref} from "vue"
import QuickSearchForm from "../forms/QuickSearchForm"
import MainNavList from "../nav/header/MainNavList"
import useClickAway from "../../compositions/useClickAway"
export default {
    name: "HeaderContent",
    components: {
        MainNavList,
        QuickSearchForm,
        Hamburger,
    },
    setup() {
        const hamburgerOpen = ref(false)
        const openSubId = ref("")
        const quickSearchRef = ref(null)

        function toggleHamburgerOpen() {
            hamburgerOpen.value = !hamburgerOpen.value
            openSubId.value = ""
        }

        function closeHamburger() {
            hamburgerOpen.value = false
            openSubId.value = ""
        }

        function toggleSubId(subId) {
            if (subId === openSubId.value) {
                openSubId.value = ""
                return
            }
            openSubId.value = subId
        }

        function getQuickSearchFieldEl(ref) {
            if (!ref || !ref.value) {
                return null
            }
            return ref.value.searchFieldRef
        }

        useClickAway(closeHamburger,[
            () => (getQuickSearchFieldEl(quickSearchRef)),
        ])


        return {
            quickSearchRef,
            hamburgerOpen,
            openSubId,
            toggleSubId,
            toggleHamburgerOpen,
        }
    },
}
</script>

<style scoped>

</style>
