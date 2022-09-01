
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

        getProductDetails(context, products) {
            let product = context.getters.productDetails(products.id);
            context.commit('setProductDetails',product)
        },
    }
}