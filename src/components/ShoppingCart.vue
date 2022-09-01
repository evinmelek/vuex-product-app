<template>
  <h1>Shopping Cart</h1>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.image">
        <span>{{product.title}} - {{product.price}} $</span>
        <button class="material-icons del" @click="remove">delete</button>
        <button class="plus" @click="increase">+</button>
        <a>{{product.quantity}}</a>
        <button class="minus" @click="decrease">-</button>
      </li>
    </ul>
    <p>Total: {{total}} $ </p>
    <button class="checkout" @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>


<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ShoppingCart",
  props: {
    productId: {
      required: true
    }
  },
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
    })
  },

  methods: {
    ...mapActions("cart", {
      checkout: "checkout",
      increase: "increaseFromCart",
      decrease: "decreaseFromCart",
      remove: "removeFromCart"
    })
  }
}
</script>


<style scoped>
div{
  border: 2px solid green;
  border-radius: 5px;
  height: fit-content;
  width: auto;
  float: top;
  padding: 1%;
  font-size: 110%;
}

ul{
  list-style-type: none;
}

li{
  border: 1px solid silver;
  height: 10%;
  width: auto;
  margin: 2%;
  padding: 3%;
}

span{
  font-weight: bold;
}
button{
  padding: 2%;
  margin: 2%;
}

img{
  height: 40%;
  width: 20%;
  float: left;
}

a{
  border: 1px solid grey;
  height: 2%;
  width: 2%;
  padding: 1%;
  float: right;
}

.minus, .plus{
  height: auto;
  width: 4%;
  background-color: cornflowerblue ;
  float: right;
  padding: 1%;
  margin: 0.2%;
  border-radius: 10px;
  border-color: cornflowerblue;
}

.checkout{
  border-radius: 5px;
  background-color: cornflowerblue;
  font-size: 110%;
}
.del{
  float: right;
  height: 5%;
  padding: 1%;
  margin: 0%;
  border: white;
  background-color: white;
}
</style>