export class Pokemons {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }


    get Template() {
        return `
    
          <div>
            <p><b>${this.name}</b></p>
          </div>
    
    
    `
    }







}