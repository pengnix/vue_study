const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法导论',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: 'UNIX编程艺术',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '编程珠玑',
                date: '2008-10',
                price: 39.00,
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice(price) {
            return '¥' + price.toFixed(2)
        },
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            // let result = 0;
            // // for(let i=0;i<this.books.length;i++){
            // //     result+=this.books[i].price * this.books[i].count
            // // }
            // // for(let i in this.books){
            // //     result+=this.books[i].price * this.books[i].count
            // // }
            // for (let item of this.books){
            //     result  +=  item.price  *   item.count
            // }
            // return result
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    }
})

const arr = [1, 3, 4, 2, 5, 9]
// const newArr = arr.filter(function(n){
//     return n < 4
// })
// console.log(newArr);
// const newArr2 = newArr.map(function (n) {
//     return n * 2
// })
// console.log(newArr2);
// const total = newArr2.reduce(function (preValue,n) {
//     return preValue + n
// },0)
// const total = arr.filter(function (n) {
//     return n<4
// }).map(function (n) {
//     return n*2
// }).reduce(function (preValue,n) {
//     return preValue + n
// },0)

const total = arr.filter(n => n < 4).map(n => n * 2).reduce((preValue, n) => preValue + n)
console.log(total);