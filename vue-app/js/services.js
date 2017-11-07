var PokeService = {
    API: {
        url: 'https://pokeapi.co/api/v1/',
        urlf:'https://pokeapi.co/api/v2/',
        get: (url) => {
            return fetch(`${PokeService.API.url}${url}`)
            .then(response => response.json())
            .catch((error) => {
                console.log(error);
            });
        },
        getf: (url) => {
            return fetch(`${PokeService.API.urlf}${url}`)
            .then(response => response.json())
            .catch((error) => {
                console.log(error);
            });
        },
        Pokemon: {
            listAll:() => {
                return PokeService.API.get('pokedex/1')
                .then(response => {
                    return response.pokemon
                        .map(pokemon => {
                            pokemon.number = PokeService.getNumberFromURL(pokemon.resource_uri);
                            return pokemon;
                        })
                        .filter(pokemon => pokemon.number < 1000)
                        .sort((a, b)=> (a.number > b.number ? 1 : -1));
                    })
            },
            find: (number) => {
                return PokeService.API.getf(`pokemon/${number}`)
            }
        }
    },

    getNumberFromURL: (url) => {
        return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'))
    }

}