Vue.component('home-page', {
    template: `
        <div>
            <img v-rotate-on-scroll src="http://hanashiro.github.io/pokedex/images/pokeball.svg" class="pokeball-back" />
            <input type="text" id="pokeFilter" placeholder="Search" maxlength="20" v-model="$parent.nameFilter">
        <ul class="poke-list">
            <my-list v-for="item in $parent.pokeList" :pokemon="item" :key="item.number" ></my-list>
        </ul>
        </div>
    `

})