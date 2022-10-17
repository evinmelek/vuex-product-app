import shop from "@/api/shop";

export  default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null,
        removedItemStatus: null
    },

    getters: {
        cartProducts(state, getters, rootState) {
            return state.items.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal(state, getters) {
            return  getters.cartProducts.reduce((total,product) => total + product.price * product.quantity, 0)
        },
    },

    mutations: {
        pushProductToCart(state, productId) {
            state.items.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },

        decrementItemQuantity(state, cartItem) {
            cartItem.quantity--
        },

        removeProductFromCart(state, status) {
            state.removedItemStatus = status
        },

        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },

        emptyCart(state) {
            state.items = []
        }

    },

    actions: {
        addProductToCart({state, commit, rootGetters}, product) {
            if(rootGetters["products/productIsInStock"](product)) {
                const cartItem = state.items.find(item => item.id === product.id)
                if(!cartItem) {
                    commit("pushProductToCart", product.id)
                } else {
                    commit("incrementItemQuantity", cartItem)
                }
                commit("products/decrementProductInventory", product, {root: true})
            } else {
                alert("Product out of stock!")
            }
        },

        increaseFromCart({state, commit}, product) {
            const cartItem = state.items.find(item => item.id === product.id)
                commit("incrementItemQuantity", cartItem)
        },

        decreaseFromCart({state, commit}, product) {
            const cartItem = state.items.find(item => item.id === product.id)
            if(cartItem > 0 ){
                commit("decrementItemQuantity", cartItem)
            }
        },

        removeFromCart({commit}) {
                    commit("removeProductFromCart")
        },
        checkout({state, commit}) {
            shop.buyProducts(
                state.items,
                () => {
                    commit("emptyCart")
                    commit("setCheckoutStatus", "success")
                },
                () => {
                    commit("setCheckoutStatus", "fail")
                }
            )
        },
    }
}