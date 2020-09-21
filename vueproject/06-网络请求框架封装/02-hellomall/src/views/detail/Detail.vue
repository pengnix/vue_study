<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import { getDetail, Goods } from "network/detail.js";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";


export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods:{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // console.log(this.topImages)
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
};
</script>

<style scoped>
</style>
