<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import { getDetail } from "network/detail.js";
import DetailSwiper from "views/detail/childComps/DetailSwiper"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages)
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
};
</script>

<style scoped>
</style>
