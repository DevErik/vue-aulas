const toUpper = (text) =>{
    let arr = text.split('');
    arr[0] = arr[0].toUpperCase();
    text =  arr.join('');
    return text; 
}

Vue.component('about-page',{
    template: `
        <div>
            <img v-rotate-on-scroll src="http://hanashiro.github.io/pokedex/images/pokeball.svg" class="pokeball-back" />
            <router-link to='/' class="back-button"> &lt; </router-link>
            <div class="poke-profile">
                <div>#{{ $route.params.number }} - {{ pkm.name }}</div>
                <img class="poke-sprite" :src="'https://serebii.net/sunmoon/pokemon/'+$route.params.number+'.png'">
            </div>
            <ul class="poke-types">
                <li v-for="type in pkm.types" >
                    <img :src="'https://serebii.net/pokedex-bw/type/'+type.type.name+'.gif'" />
                </li>
            </ul>
            <table class="stats">
                <tr>
                    <td>Attack</td>
                    <td>Defense</td>
                    <td>Sp Atk</td>
                    <td>Sp Def</td>
                    <td>Speed</td>
                </tr>
                <tr>
                    <td>{{ this.pkm.stats[4].base_stat }}</td>
                    <td>{{ this.pkm.stats[3].base_stat }}</td>
                    <td>{{ this.pkm.stats[2].base_stat }}</td>
                    <td>{{ this.pkm.stats[1].base_stat }}</td>
                    <td>{{ this.pkm.stats[0].base_stat }}</td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            pkm: { types: []}
        }
    },
    mounted: function(){
        PokeService.API.Pokemon.find(this.$route.params.number)
        .then(pokemon => {
            pokemon.name =  toUpper(pokemon.name);
            this.pkm = pokemon      
            console.log(this.pkm.stats)
        });

    }
})