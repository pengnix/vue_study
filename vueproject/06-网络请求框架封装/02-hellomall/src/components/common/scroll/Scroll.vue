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
    },
    pullUpLoad:{
      type:Boolean,
      default:false
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
      pullUpLoad:this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll",position)
    });
    this.scroll.on("pullingUp",()=>{
      console.log("pullingUp");
      this.$emit("pullingUp")
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
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
