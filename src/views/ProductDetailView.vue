<template>
  <h1>Product Details</h1>
  <div class="main">
    <div class="products" v-for="product in products" :key="product.id">
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
      <img :src="product.image">
      <a>{{product.title}} - {{product.price}} $ </a>
      <p>{{product.detail}}</p>
    </div>
  </div>
</template>


<script>
import {mapState,  mapActions} from "vuex"

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
  },

  methods: {
    ...mapActions({
      getProductDetails: "detail/getProductDetails",
      addProductToCart: "cart/addProductToCart"
    }),
  },

  created() {
    this.loading = true
    this.getProductDetails()
        .then(() => this.loading = false)
  },

}

</script>


<style scoped>
img{
  float: left;
  height: 160px;
  width: auto;
  align: center;
  padding: 5%;
}

a{
  font-weight: bold;
  float: left;
}

p{
  float: left;
  border: 1px solid cornflowerblue;
  padding: 2%;
  min-height: 150px;
  width: 90%;
}

span{
  font-size: 260%;
  color: cornflowerblue;
}

.products{
  width: 60%;
  height: auto;
  padding: 5%;
}

.main{
  padding: 1%;
  float: center;
  width: 100%;
}
</style>
