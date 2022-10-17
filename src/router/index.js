import { createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "product-list",
            component: () => import("../components/products/ProductList")
        },

        {
            path: "/shopping-cart",
            name: "shopping-cart",
            component: () => import("../components/cart/ShoppingCart")
        },

        {
            path: "/product-detail",
            name: "product-detail",
            component: () => import("../components/detail/ProductDetail")
        }
    ]
})

export default router