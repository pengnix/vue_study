const {add, mul} = require('./js/mathUtils');
console.log(add(10, 10));

import  {name} from "./js/info"

console.log(name);

require('./css/normal.css')
require('./css/special.less')

document.writeln('<h2>run run run222</h2>')

import Vue from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
    el:"#app",
    template:`<App/>`,
    components:{
        App
    }
})