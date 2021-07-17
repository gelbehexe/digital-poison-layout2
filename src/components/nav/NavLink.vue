<template>
    <div
        v-if="item.isSep"
        class="nav__sep"
    />
    <button
        v-else-if="item.isButton"
        v-bind="$attrs"
        class="nav__link touch-click"
        xlick.capture.prevent.stop="item.buttonAction || (() => {})"
        @click.capture.prevent.stop="handleButtonAction"
    >
        <span class="nav__link__title">{{ item.title }}</span>
    </button>
    <a
        v-else-if="item.isRaw"
        class="nav__link touch-click"
        v-bind="$attrs"
        :href="item.path"
    ><span class="nav__link__title">{{ item.title }}</span></a>
    <router-link
        v-else
        v-slot="{ navigate, href, isActive, isExactActive }"
        :to="item.path || '/'"
        custom
    >
        <a
            v-if="item.children && item.children.length"
            class="nav__link touch-click"
            :class="{
                active: isActive,
            }"
            href="#"
            v-bind="$attrs"
            @click.capture.prevent.stop="$emit('toggle-sub-id', item.id)"
        >
            <span class="nav__link__title">{{ item.title }}</span>
            <span class="nav__link__toggler">
                <span class="sr-only">
                    Toggler
                </span>
                <chevron-up-down-toggler
                    aria-hidden="true"
                    class="button__icon button__icon--nav-toggler"
                    :open="open"
                />
            </span>
        </a>
        <a
            v-else
            v-bind="$attrs"
            class="nav__link touch-click"
            :class="{
                active: isActive,
                current: isExactActive,
            }"
            :href="href"
            @click="navigate"
        ><span class="nav__link__title">{{ item.title }}</span></a>
    </router-link>
</template>

<script>
import ChevronUpDownToggler from "../icons/ChevronUpDownToggler"
export default {
    name: "NavLink",
    components: {ChevronUpDownToggler},
    inheritAttrs: false,
    props: {
        item: {
            type: Object,
            required: true,
            default: () => ({}),
        },
        open: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["toggle-sub-id"],
    setup(props) {
        function handleButtonAction(ev) {
            if (props.item.buttonAction) {
                props.item.buttonAction(ev)
            }
        }

        return {
            handleButtonAction,
        }
    },
}
</script>

<style scoped>

</style>
