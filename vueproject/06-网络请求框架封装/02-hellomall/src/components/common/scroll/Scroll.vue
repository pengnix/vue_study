<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  components: {
    BScroll,
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click:true,
      pullUpLoad:true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    console.log(this.scroll);
    console.log('finish lis');
  },
};
</script>
<style scoped>
/* .wrapper{

position: absolute;
left: 0;
top: 0;
overflow: hidden;
} */
</style>
