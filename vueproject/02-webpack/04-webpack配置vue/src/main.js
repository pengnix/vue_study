const {add, mul} = require('./js/mathUtils');
console.log(add(10, 10));

import  {name} from "./js/info"

console.log(name);

require('./css/normal.css')
require('./css/special.less')

document.writeln('<h2>run run run</h2>')

import Vue from 'vue'

new Vue({
    el:"#app",
    data:{
        message:"hello webpack",
        name:"xhp"
    },
    template:`
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
    methods:{
        btnClick(){
            console.log('btnClick');
        }
    }
})