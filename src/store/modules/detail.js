import axios from "axios";
export  default {
    namespaced: true,
    state: {
        products: []
    },

    getters: {
        productDetails: (state) => (id) => {
            return state.products.find((product) => product.id === id)
        }
    },

    mutations: {
        setProducts(state, products){
            state.items = products
        },

        setProductDetails(state, products) {
            state.products = products
        },

        incrementProductInventory(state, product) {
            product.inventory++
        },
    },

    actions: {
        async getProductDetails(id) {
            await axios.get(`http://localhost:3000/products/${id}/`).then(response => {
                this.product = response.data
            })
        },
    }
}