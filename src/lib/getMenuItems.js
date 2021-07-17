
/**
 *
 * @param {RouteDef[]} routeDefs
 * @param {string[]} pathSegments
 * @return {RouteDef[]}
 */
export default function getMenuItems(routeDefs, pathSegments = []) {
    return routeDefs.map(routeDef => {
        const result = {...routeDef}
        const currentPathSegments = [...pathSegments]
        if (routeDef.path && !routeDef.isRaw) {
            currentPathSegments.push(routeDef.path)
            result.path = currentPathSegments.join("/")
            if (result.path.substr(0,1) !== "/") {
                result.path = "/" + result.path
            }
        }


        let children
        if (routeDef.isButton || routeDef.isRaw || routeDef.isSep || !routeDef.children || !routeDef.children.length) {
            children = []

        } else {
            children = getMenuItems(routeDef.children, currentPathSegments)
            if (children.findIndex(item => (item.isActive)) !== -1) {
                result.isCurrent = true
            }
        }

        // if (!routeDef.isButton && !routeDef.isRaw && !routeDef.isSep && !children.length) {
        //     console.log("router.currentRoute.value.path === result.path", router.currentRoute.value.path, "===", result.path, router.currentRoute.value.path === result.path)
        //     result.isActive = router.currentRoute.value.path === result.path
        // }


        if (children.length) {
            result.children = children
        } else {
            delete result.children
        }

        return result

    })

}
