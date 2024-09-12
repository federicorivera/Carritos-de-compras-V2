const botones = document.querySelectorAll(".btn-warning");
const ul = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragmento = document.createDocumentFragment();


const carrito = [];
 
const crearProductoPelicula = (e) => {

    //crear el producto
    const producto = {
        pelicula: e.target.dataset.pelicula,
        img: e.target.dataset.img,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }; 


    const posicion = carrito.findIndex((item) => {
        return item.pelicula === producto.pelicula;
    });

  
    
    if(posicion === -1) {
      carrito.push(producto);
    } else {
        carrito[posicion].cantidad++;
    }
    


    //Mostrar en la web
    mostrarCarritoEnLaWeb();
};



//Mostrar carrito en la web

const mostrarCarritoEnLaWeb = () => {
    ul.textContent = "";

   carrito.forEach((item) => {
        const clone = template.content.cloneNode(true);
        
        clone.querySelector(".img-fluid").src = item.img;
        clone.querySelector(".text-warning").textContent = item.pelicula;
        clone.querySelector(".text-info").textContent = "$" + item.precio * item.cantidad;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragmento.appendChild(clone);
    });

    ul.appendChild(fragmento);
};


botones.forEach((item) => {
    item.addEventListener("click",  crearProductoPelicula);
});



