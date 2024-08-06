var button = document.getElementById("crear")


button.addEventListener('click', crearPersonaje)

class Character{

    constructor(nomb, img){

        this.nombre = nomb;
        this.imagen = img;
        
    }
    
}

function crearPersonaje(){

    var nombpj = document.getElementById("nomb-pj").value
    var imglink = document.getElementById("img-pj").value

    if(nombpj && imglink){  
        
        var char1 = new Character(nombpj, imglink)

        const nuevoNombre = document.createElement('h2');
        const nuevoImg    = document.createElement('img');
        nuevoImg.setAttribute('src', char1.imagen);
        nuevoImg.style.height = '300px'
        nuevoImg.style.width = '200px'
    
        nuevoNombre.textContent = char1.nombre;
    
        document.getElementById("pjs").appendChild(nuevoNombre);
        document.getElementById("pjs").appendChild(nuevoImg);
    
        console.log(char1)

    }

}


