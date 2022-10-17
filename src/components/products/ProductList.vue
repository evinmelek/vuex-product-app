<template>
  <div class="main">
    <div class="cart">
      <router-link to="/shopping-cart">
        <span class="total-quantity"> </span>
        <span class="material-icons">shopping_cart</span>
      </router-link>
    </div>
    <h1>Product List</h1>
    <div class="products">
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
      <ul v-else>
        <li v-for="product in products" :key="product.id">
          <img :src="product.image">
          <p>{{product.title}} - {{product.price}} $ </p> <a>Stock({{product.inventory}})</a>
          <button :disabled="!productIsInStock(product)"
                  @click="addProductToCart(product)"
                  class="material-icons"
          > add_shopping_cart
          </button>
          <router-link
              :to="{name: 'product-detail' }"
          >Details
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"

  export  default {

    data() {
      return {
        loading: false
      }
    },

    computed: {
        ...mapState({
      products: state => state.products.items
      }),

      ...mapGetters("products", {
        productIsInStock: "productIsInStock"
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: "products/fetchProducts",
        addProductToCart: "cart/addProductToCart",
      }),
    },

    created() {
      this.loading = true
      this.fetchProducts()
          .then(() => this.loading = false)
    },

  }

</script>

<style scoped>

ul{
  list-style-type: none;
  align: center;
}

li{
  height: 180px;
  width: 130px;
  border: 1px solid silver;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px silver;
  float: left;
  padding: 2%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
}

img{
  float: top;
  height: 60px;
  width: 60px;
  align: center;
}

button{
  float: right ;
  padding: 2%;
  margin-bottom: 5%;
  background-color: cornflowerblue;
  border: cornflowerblue;
  border-radius: 6px;
}

p{
  font-weight: bold;
}

a{
  font-style: italic;
  float: left;
}

span{
  font-size: 260%;
  text-decoration: none;
  color: cornflowerblue;
}

.total-quantity{
  font-size: medium;
}

.products{
  float: center;
}

.cart{
  float: right;
  padding: 2%;
}
</style>
