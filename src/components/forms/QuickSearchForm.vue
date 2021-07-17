<template>
    <form
        class="quick-search"
        @submit.prevent="submitForm"
    >
        <div class="quick-search__wrapper">
            <label
                class="sr-only"
                for="quick-search"
            >Search for</label>
            <input
                id="quick-search"
                ref="searchFieldRef"
                class="quick-search__field"
                type="search"
                placeholder="Search"
                size="10"
            >
            <button
                class="quick-search__button touch-click"
                type="submit"
            >
                <span class="sr-only">Search</span>
                <svg
                    class="quick-search__button__icon button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
    </form>
</template>

<script>
import { ref } from "vue"

export default {
    name: "QuickSearchForm",
    setup() {
        const searchFieldRef = ref(null)

        function submitForm(ev) {
            console.log("Submit QuickSearchForm",ev)
            // noinspection JSUnresolvedVariable
            if (ev.submitter) {
                ev.submitter.blur()
            }
        }

        return {
            searchFieldRef,
            submitForm,
        }
    },
}
</script>

<style scoped>

</style>
