import { ProxyState } from "../AppState.js"
import { Pokemons } from "../Models/Pokemons.js"
import { pokemonsApi } from "./AxiosService.js"

class PokemonsService {



    async getPokemons() {
        let res = await pokemonsApi.get('/api/v2/pokemon')
        console.log(res.data);
        ProxyState.pokemons = res.data.results.map(p => new Pokemons(p))
        console.log(ProxyState.pokemons);
    }

}







export const pokemonsService = new PokemonsService()