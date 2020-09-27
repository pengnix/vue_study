import Toast from "./Toast"
import Vue from "vue"
const obj={

}

obj.install = function(Vue){
  const toastConstructor = Vue.extend(Toast);
  const toast = new toastConstructor();
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
  // console.log("install",Vue.protoType.$toast)
}
 export default obj
