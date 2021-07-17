<template>
    <ul class="main-nav__list nav__list">
        <li
            v-for="item in items"
            :key="item.id"
            class="main-nav__item nav__item"
        >
            <nav-link
                :open="item.id === openSubId"
                :item="item"
                class="main-nav__link"
                @toggle-sub-id="itemId => $emit('toggle-sub-id',itemId)"
            />
            <sub-nav-list
                v-if="item.children && item.children.length"
                :items="item.children"
                :open="item.id === openSubId"
            />
        </li>
    </ul>
</template>

<script>
import {ref} from "vue"
import getMenuItems from "../../../lib/getMenuItems"
import routeDefs from "../../../config/routes"
import NavLink from "../NavLink"
import SubNavList from "./SubNavList"
export default {
    name: "MainNavList",
    components: {
        SubNavList,
        NavLink,
    },
    props: {
        openSubId: {
            type: String,
            required: true,
            default: "",
        },
    },
    emits: ["toggle-sub-id"],
    setup() {
        /**
         * @type {ToRef<RouteDef[]>}
         */
        const items = ref(getMenuItems(routeDefs))

        return {
            items,
        }
    },
}
</script>

<style scoped>

</style>
