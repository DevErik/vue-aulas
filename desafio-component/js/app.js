var app = new Vue({
    el: '#app',
    data: {
        rotateValue: 90
    },
    methods: {
        rotate: function(value){
            console.log(value)
        }

    }
})