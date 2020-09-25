<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength2}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
  },
  computed: {
    // ...mapGetters(['cartLength'])

    ...mapGetters({
      cartLength2: "cartLength"
    })

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
  /* font-weight: 700; */
}
</style>
