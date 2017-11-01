const app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        upCounter: function(){
            this.counter++;
        }
    }
})
app.$on('abc', app.upCounter)