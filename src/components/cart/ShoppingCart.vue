<template>
  <div>
    <div>
      <router-link :to="{name: 'product-list'}" class=" material-icons route-to-main-button">home</router-link>
    </div>
    <h1>Shopping Cart</h1>
    <div class="container">
      <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <div>
              <img :src="product.image">
            </div>
            <div class="info-title">
              <b>{{product.title}} - {{product.price}} $</b>
            </div>
            <div class="product-transactions-side">
              <RemoveCartProduct></RemoveCartProduct>
              <IncreaseCartProductAmount></IncreaseCartProductAmount>
              <a>{{product.quantity}}</a>
              <DecreaseCartProductAmount></DecreaseCartProductAmount>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>Total: {{total}} $ </p>
      </div>
      <div>
        <CartCheckoutButton></CartCheckoutButton>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions, mapGetters, mapState} from "vuex";
import DecreaseCartProductAmount from "@/components/cart/cartContents/DecreaseCartProductAmount";
import CartCheckoutButton from "@/components/cart/cartContents/CartCheckoutButton";
import IncreaseCartProductAmount from "@/components/cart/cartContents/IncreaseCartProductAmount";
import RemoveCartProduct from "@/components/cart/cartContents/RemoveCartProduct";

export default {
  name: "ShoppingCart",
  components: {RemoveCartProduct, IncreaseCartProductAmount, CartCheckoutButton, DecreaseCartProductAmount},
  computed: {
    ...mapState({
      products: state => state.products.items
    }),

    ...mapGetters({
      products: "cart/cartProducts",
      total: "cart/cartTotal",
      productIsInStock: "products/productIsInStock"
    }),

    ...mapState("cart", {
      checkoutStatus: state => state.checkoutStatus,
      removeFromCart: state => state.removeFromCart
    })
  },

  methods: {
    ...mapActions("cart", {
      checkout: "checkout",
      increase: "increaseFromCart",
      decrease: "decreaseFromCart",
      remove: "removeFromCart",
    })
  }
}
</script>


<style scoped>
.container{
  border: 2px solid green;
  border-radius: 5px;
  padding: 2%;
  margin: 5%;
  height: fit-content;
  width: auto;
  float: top;
}

.route-to-main-button{
  padding: 0.5%;
  margin-right: 5%;
  text-decoration: none;
  color: white;
  font-size: 180%;
  float: right;
  margin-bottom: 5%;
  background-color: cornflowerblue;
  border: cornflowerblue;
  border-radius: 6px;
}

.route-to-main-button:hover{
  color: #2c3e50;
}

.product-transactions-side{
  width: 60%;
  padding: 4%;
  text-align: right;
  font-size: 110%;
}

.info-title{
  border: 1px solid antiquewhite;
  width: 50%;
  padding: 4%;
  text-align: right;
  margin-left: 4%;
  font-size: 110%;
  float: right;
}

ul{
  list-style-type: none;
}

li{
  border: 1px solid silver;
  width: 90%;
  margin: 2%;
  padding: 2%;
  float: left;
}

img{
  height: 80%;
  width: 15%;
  float: left;
  border: 1px solid silver;
  margin-right: 3%;
}

a{
  border: 1px solid grey;
  height: 2%;
  width: auto;
  padding: 1%;
  float: right;
}

</style>