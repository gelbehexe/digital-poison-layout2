<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            v-if="open"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
        />
        <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
        />
    </svg>
</template>

<script>
export default {
    name: "ChevronUpDownToggler",
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>
