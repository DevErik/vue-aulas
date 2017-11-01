const app1 = new Vue({
    el: '#app1',
    methods: {
        upCounter: function(){
            app2.$emit('abc');
        }
    }
})

const app2 = new Vue({
    el: '#app2',
    data: {
        counter: 0
    },
    methods: {
        upCounter: function(){
            this.counter = 555;
        }
    }
})

Vue.filter('upper', function(text){
    return text.toUpperCase();
})
const app = new Vue({
    el: '#app',
    data: {
        title: 'TreinaWeb',
        inOn: true
    },
    methods: {
        removerVogais: function(){
            this.inOn ? this.inOn = false : this.inOn = true;
        }   
    },
    filters: {
        upper: function(text){
            return text.toUpperCase();
        },
        reverse: function(text){
            return text.split('').reverse().join('');
        },
        cut: function(text, index1, index2){
            return text.substring(index1, index2);
        }
    }
})

app2.$on('abc', app2.upCounter)