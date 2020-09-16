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
  props: {
    probeType:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click:true,
      pullUpLoad:true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll",position)
    });
    console.log(this.scroll);
    console.log('finish lis');
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    }
  }
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
