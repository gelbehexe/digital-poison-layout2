// noinspection JSClosureCompilerSyntax

import { v4 as uuid } from "uuid"
import Blog from "../pages/Blog.vue"
import About from "../pages/About.vue"
import Contact from "../pages/Contact.vue"
import LegalPrivacyStatement from "../pages/Legal/PrivacyStatement.vue"
import LegalTermsAndConditions from "../pages/Legal/TermsAndConditions.vue"
import Landing from "../pages/Landing.vue"
import Dummy from "../pages/Dummy"

/**
 * @typedef {Object} RouteDef
 * @property {string} id
 * @property {?string} title
 * @property {?string} path
 * @property {?boolean} isActive
 * @property {?boolean} isCurrent
 * @property {?boolean} isSep
 * @property {?boolean} isRaw
 * @property {?boolean} isButton
 * @property {?boolean} hideInMenu
 * @property {?function} buttonAction
 * @property {Component?} component
 * @property {?RouteDef[]} children
 */

/**
 *
 * @type {RouteDef[]}
 */
const routes = [
    {
        id: uuid(),
        title: "Home",
        name: "home",
        path: "/",
        component: Landing,
        hideInMenu: false,
    },
    // {
    //     id: uuid(),
    //     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta nisi odio optio quia sapiente sequi voluptatibus! Doloremque impedit minus quis soluta.",
    //     name: "long",
    //     path: "/long",
    //     component: Dummy,
    //     hideInMenu: false,
    // },
    {
        id: uuid(),
        title: "Blog",
        name: "blog",
        path: "/blog",
        component: Blog,
    },
    {
        id: uuid(),
        title: "About",
        name: "about",
        path: "/about",
        component: About,
    },
    {
        id: uuid(),
        title: "Contact",
        name: "contact",
        path: "/contact",
        component: Contact,
    },
    // {
    //     title: "My Button",
    //     isButton: true,
    //     buttonAction: () => {
    //         console.log("Button Clicked")
    //     },
    // },
    // {
    //     id: uuid(),
    //     title: "PEGU Blog",
    //     path: "https://blog.pegu.de",
    //     isRaw: true,
    // },
    // {
    //     id: uuid(),
    //     title: "External Links. Consectetur adipisicing elit. Aperiam dicta nisi odio optio quia sapiente sequi voluptatibus! Doloremque impedit minus quis soluta.",
    //     path: "/external-links",
    //     children: [
    //         {
    //             id: uuid(),
    //             title: "PEGU Blog",
    //             path: "https://blog.pegu.de",
    //             isRaw: true,
    //         },
    //         {
    //             id: uuid(),
    //             title: "G. Arentzen",
    //             path: "https://g-arentzen.de",
    //             isRaw: true,
    //         },
    //         {
    //             id: uuid(),
    //             title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta nisi odio optio quia sapiente sequi voluptatibus! Doloremque impedit minus quis soluta.",
    //             name: "long",
    //             path: "dummy2",
    //             component: Dummy,
    //         },
    //         {
    //             id: uuid(),
    //             isSep: true,
    //         },
    //         {
    //             id: uuid(),
    //             title: "Sub Button",
    //             isButton: true,
    //         },
    //     ],
    // },
    {
        id: uuid(),
        title: "-",
        isSep: true,
    },
    {
        // id: uuid(),
        id: "5a",
        title: "Legal Notes",
        path: "/legal",
        children: [
            {
                id: uuid(),
                title: "Privacy Statement",
                path: "privacy-statement",
                name: "privacy-statement",
                component: LegalPrivacyStatement,
            },
            {
                id: uuid(),
                title: "-",
                isSep: true,
            },
            {
                id: uuid(),
                title: "Terms and Conditions",
                path: "terms-and-conditions",
                name: "terms-and-conditions",
                component: LegalTermsAndConditions,
            },
        ],
    },
]

export default routes
