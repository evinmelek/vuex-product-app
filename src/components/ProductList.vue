<template> 
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        <img :src="product.image">
        <p>{{product.title}} - {{product.price}} currency | {{product.inventory}}</p>
        <button @click="addProductToCart(product)">Add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
//import shop from "@/api/shop.js"
  export  default {

    data() {
      return {
        loading: false
      }
    },

    computed: {
      products() {
        return this.$store.getters.availableProducts
      }
    },

    methods: {
      addProductToCart(product) {
        this.$store.dispatch("addProductToCart", product)
      }
    },

    created() {
      this.loading = true
      this.$store.dispatch("fetchProducts")
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
  max-height: 140px;
  max-width: 120px;
  min-height: 140px;
  min-width: 120px;
  border: 1px solid gray;
  border-radius: 5px;
  float: left;
  padding: 2%;
  margin-left: 2%;
  margin-right: 2%;
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
  padding: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
}

p{
  font-weight: bold;
}
</style>
