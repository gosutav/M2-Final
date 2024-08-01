class Character{

    constructor(nomb, img, desc){

        this.nombre = nomb;
        this.imagen = img;
        this.descripcion = desc;

    }

}

var char1 = new Character("Luffy", "Mugiwara", "Strawhat")

console.log(char1)

const elemento = document.createElement('h2')

elemento.textContent = char1.nombre