import Vuex from "vuex"
import cart from "@/store/modules/cart";
import products from "@/store/modules/products";
import detail from "@/store/modules/detail";

 
export default new Vuex.Store({
    modules: {
      cart,
      products,
      detail
    }
})