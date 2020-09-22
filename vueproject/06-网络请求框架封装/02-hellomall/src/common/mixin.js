import { debounce } from "common/utils.js";
export const itemListenerMixin = {
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  data() {
    return {
      itemImgListener: null,
      refresh:null
    };
  },
};
