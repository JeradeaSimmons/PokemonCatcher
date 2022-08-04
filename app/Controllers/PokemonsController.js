import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawPokemons() {
    let template = ''

    ProxyState.pokemons.forEach(p => template += p.Template)

    document.getElementById('pokemons').innerHTML = template
}







export class PokemonsController {

    constructor() {

        this.getAll()
        ProxyState.on('pokemons', _drawPokemons)
    }

    async getAll() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            console.error('[Getting All]', error);
            Pop.toast(error)
        }
    }

    async getPokemons() {
        try {
            await pokemonsService.setTargetPokemon(url)

        } catch (error) {
            console.error('[Getting Pokemons]', error);
            Pop.error(error)

        }
    }

}
