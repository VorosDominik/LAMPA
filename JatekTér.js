import lampa from "./Lampa.js";
class Jatekter {
    constructor() {
        //this.#lepes = 0;
        this.id=lampa.id
        const szuloElem = $("article");
        const asideElem = $("aside");
        //const info = new Infopanel(asideElem);

        for (let index = 0; index < 9; index++) {
            const elem = new lampa(szuloElem, index,true);
        }
        
    }
    setallapotlista(){
        if (randint(2,2) %2===0)
        return true
        else{ return false}
    }
    randint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
}
export default Jatekter;