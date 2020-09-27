import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("ADD_COUNTER");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("ADD_TO_CART");
      }
    });
  }
};
