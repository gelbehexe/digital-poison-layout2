import {createRouter, createWebHistory, RouterView} from "vue-router"
import {h} from "vue"
import routeDefs from "../config/routes"
import Dummy from "../pages/Dummy.vue"

/**
 *
 * @param {RouteDef[]} routeDefs
 * @return {*}
 */
function prepareRoutes(routeDefs) {
    const filteredRouteDefs = routeDefs.filter(routeDef => (
        !routeDef.isSep && !routeDef.isButton && !routeDef.isRaw
    ))

    return filteredRouteDefs.map(item => {
        const result = {
            path: item.path,
            component: item.component,
        }

        if (item.children && item.children.length) {
            if (!result.component) {
                result.component = {render: () => h(RouterView)}
            }
            result.children = prepareRoutes(item.children)
        }

        if (!result.component) {
            result.component = Dummy
        }

        // { render: () => h(RouterView) }
        return result
    })
}


const routes = prepareRoutes(routeDefs)

// noinspection JSCheckFunctionSignatures
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router

