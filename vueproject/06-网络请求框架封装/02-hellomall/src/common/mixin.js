import { debounce } from "common/utils.js";
import BackTop from "components/content/backTop/BackTop";

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
      refresh: null
    };
  }
};

export const backTopMixin = {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    backClick() {
      console.log("1111");
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
  components: {
    BackTop
  }
};
