import { ProxyState } from "../AppState.js";




export class CaughtPokemonsController {
    constructor() {

        ProxyState.on('caughtPokemons', _draw)

    }
}

