<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength2}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  computed: {
    // ...mapGetters(['cartLength'])

    ...mapGetters({
      cartLength2: "cartLength",
    }),

    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* z-index: 9;
  position: relative; */
  /* font-weight: 700; */
}
#cart {
  height: 100vh;
  position: relative;
}
</style>
