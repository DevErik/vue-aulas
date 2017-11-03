Vue.component('my-list', {
    template: `
    <li class="poke-list-item">
        <img :src="sprite"/>
        <span>{{pokemon.number | pokeNumber}} - {{pokemon.name}}</span>
    </li>
    `,
    props: ['pokemon'],
    computed:{
        number: function(){
            Vue.filter('pokeNumber')(this.pokemon.number);
        },
        sprite: function(){
            return `http://serebii.net/pokedex-xy/icon/${this.pokemon.number}.png`
        }
    }
})