<template>
    <header class="header">
        <h1 class="logo touch-click">
            <router-link
                xto="{name: 'home'}"
                to="/"
                class="logo__link"
            >
                <span class="sr-only">Digital Poison</span>
                <logo class="logo__image" />
            </router-link>
        </h1>
        <header-content />
    </header>
</template>

<script>
import Logo from "../Logo"
import HeaderContent from "./HeaderContent"
export default {
    name: "HeaderLogo",
    components: {HeaderContent,
        Logo},
}
</script>

<style scoped>

</style>
