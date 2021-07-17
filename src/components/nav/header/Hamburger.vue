<template>
    <button
        aria-hidden="true"
        class="hamburger touch-click"
        :class="{
            'hamburger--open': open,
        }"
        @click.capture.stop.prevent="$emit('toggle')"
    >
        <span
            class="hamburger__icon"
        >
            <span class="hamburger__icon__line hamburger__icon__line--top" />
            <span class="hamburger__icon__line hamburger__icon__line--middle" />
            <span class="hamburger__icon__line hamburger__icon__line--bottom" />
        </span>
    </button>
</template>

<script>
export default {
    name: "Hamburger",
    props: {
        open: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    emits: ["toggle"],
}
</script>

<style scoped>

</style>
