<template>
  <div class="cart-list">
    <scroll class="content" :pull-up-load="true"
      @pullingUp="loadMore"
      :probe-type="3"
      ref="scroll"
      @scroll="contentScroll">
        <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem"

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    Scroll,
    CartListItem
  },
  methods: {
    loadMore(){

    },
    contentScroll(position){

    }
  },
  activated () {
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
.car-list {
  height: 100%;
}
</style>
