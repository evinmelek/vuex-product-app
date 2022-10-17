import axios from "@/api/axios/index";

export  default {
    namespaced: true,
    state: {
        items: []
    },

    getters: {
        availableProducts(state){
            return state.items.filter(product => product.inventory > 0)
        },

        productIsInStock() {
            return(product) => {
                return product.inventory > 0
            }
        }
    },

    mutations: {
        setProducts(state, products){
            state.items = products
        },

        decrementProductInventory(state, product) {
            product.inventory--
        },

        incrementProductInventory(state, product) {
            product.inventory++
        },
    },

    actions: {
        async fetchProducts({commit}) {
            try {
                const data = await axios.get("http://localhost:3000/products" )
                commit("setProducts", data.data)
            }
            catch (error) {
                console.error(error)
            }
        },
    }
}