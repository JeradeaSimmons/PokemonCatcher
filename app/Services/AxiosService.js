export const pokemonsApi = new axios.create({
    baseURL: 'https://pokeapi.co',
    timeout: 8000
})



export const caughtPokemonsApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jeradea/pokemon',
    timeout: 8000
})