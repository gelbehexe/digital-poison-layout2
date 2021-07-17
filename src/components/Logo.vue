<template>
    <img
        :src="logo"
        alt="Digital Poison"
    >
</template>

<script>
import logo from "../assets/logo.svg"
export default {
    name: "Logo",
    setup() {
        return {
            logo,
        }
    },
}
</script>

<style scoped>

</style>
