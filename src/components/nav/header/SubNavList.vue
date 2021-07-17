<template>
    <nav
        class="sub-nav"
        :class="{
            'sub-nav--open': open
        }"
    >
        <ul
            class="sub-nav__list nav__list"
        >
            <li
                v-for="item in items"
                :key="item.id"
                class="sub-nav__item nav__item"
            >
                <nav-link
                    :item="item"
                    class="sub-nav__link"
                />
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from "../NavLink"
export default {
    name: "SubNavList",
    components: {NavLink},
    props: {
        items: {
            type: Array,
            required: true,
            default: () => ([]),
        },
        open: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>

<style scoped>

</style>
