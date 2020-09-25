<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button class="check-button" />
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
    <div class="calculate">
      去计算 ({{checkLenght}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  computed: {},
  components: {
    CheckButton,
  },
  methods: {},
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.newPrice * item.count + preValue;
          }, 0).toFixed(2)
      );
    },
    checkLenght(){
      return this.$store.getters.cartList.filter(item=>item.checked).length
    }
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  width: 100%;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-right: 20px;
  flex: 1;
}
.calculate{
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
