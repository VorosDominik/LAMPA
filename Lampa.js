class lampa{
 
   
    constructor(szuloElem, id,allapot) {
        this.allapot = allapot;
        this.szuloElem = szuloElem;
        this.id = id;
        
        szuloElem.append(`<div class="dot"><p></p></div>`);
        this.divElem = $(`article div:last-child`);
    
        this.divElem.on("click", () => {
          if (this.allapot  === true) {
            
            console.log("világit")
            this.getid(this.id);
            this.szinvaltas1();
            this.setallapot(false);
          }
          else if (this.allapot  === false){
            console.log("nem világit");
            this.getid(this.id);
            this.szinvaltas2();
            this.setallapot(true);
          }
          
        });
        
        
      
      }
      setallapot(ertek) {
        this.allapot = ertek;
      }
      szinvaltas1() {
         this.divElem.css("background-color", "green");;
        }
        szinvaltas2() {
            this.divElem.css("background-color", "yellow");;
           }

        getid(id){
            return id=this.id
        }
    
      
      

    }
    
    export default lampa;