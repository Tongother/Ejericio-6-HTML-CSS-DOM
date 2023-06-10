const botonesComprar = document.querySelectorAll(".btnComprar");
const ulElements = document.querySelector(".dropdown-menu");
const avisoNoHayProducto = document.querySelector("#avisoNoHayProducto");
const btnPagar = document.getElementById("btnPagar");
let divSeparador, pElement, h6Element, cantidadProducto, vendedorPrincipal,index = [], indexCajas= [], indexVendedores = [], contadorCajas=-1;
var imgElement, vendedor, cantidadesProductos;

var productos = [
    {nombreProducto1: "Aqua", costo1: 200, carrito1:false},
    {nombreProducto2: "Emoción", costo2: 180, carrito2:false},
    {nombreProducto3: "Alegría", costo3: 160, carrito3:false},
    {nombreProducto4: "Frescura", costo4: 150, carrito4:false},
];

let vendedores = [
    {personal1: "Juana", dineroObtenido1: 0, productosVendidos1:0, ventaDeAqua1:0, ventaDeEmocion1:0, ventaDeAlegria1:0, ventaDeFrescura1:0},
    {personal2: "Pedro", dineroObtenido2: 0, productosVendidos2:0, ventaDeAqua2:0, ventaDeEmocion2:0, ventaDeAlegria2:0, ventaDeFrescura2:0},
];


function elementosCarrito(costo, venta){
    contadorCajas++;
        cantidadProducto = document.createElement("h6");
        cantidadProducto.classList.add("cantidadProducto");

        avisoNoHayProducto.style.display = "none";

        const liElement = document.createElement("li");
        liElement.classList.add("dropdown-item", "formatoLi");
        var liElements = document.querySelectorAll(".dropdown-item");
        
        imgElement = document.createElement("img");
        imgElement.classList.add("imgCarrito");

        divSeparador = document.createElement("div");
        divSeparador.classList.add("divSeparadorDeNombre");
        
        h6Element = document.createElement("h6");
        h6Element.classList.add("h6Script");

        pElement = document.createElement("p");
        pElement.classList.add("pScript");
        pElement.innerHTML = `Atendido por: ${seleccionDelVendedor(costo, venta)}`;

        ulElements.appendChild(liElement);
        liElement.appendChild(cantidadProducto);
        liElement.appendChild(imgElement);
        liElement.appendChild(divSeparador);
        divSeparador.appendChild(h6Element);
        divSeparador.appendChild(pElement);
}

function seleccionDelVendedor(costo, venta){
    while(true){
        vendedor = prompt("Por favor, coloque el número de quien fue el que lo atendio \n 1. Juana \n 2. Pedro");
        if(vendedor === "1"){
            vendedores[0].dineroObtenido1 += costo;
            return "Juana"
        }else if(vendedor === "2"){
            vendedores[1].dineroObtenido2 += costo;
            return "Pedro"
        }else{
            alert("Por favor, coloque un número valido entre las opciones");
        }
    }
}

function ponerProductosEnCarrito(nameBtn){
    if(nameBtn === "btn1"){
        if(productos[0].carrito1 === false){
            index[0] = 1;
            elementosCarrito(productos[0].costo1);
            imgElement.src = "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/7363/07375cbe-d873-4ff3-88c1-ae241419da4c-acqua-di-gioia-giorgio-armani-eau-de-parfum-perfume-feminino-100ml.png";
            h6Element.innerHTML=`${productos[0].nombreProducto1} $${productos[0].costo1}`;
            cantidadesProductos = document.querySelectorAll(".cantidadProducto");
            productos[0].carrito1 = true;
            indexCajas[0] = contadorCajas;
            indexVendedores[0] = vendedor;

            if(indexVendedores[0] === "1"){
                vendedores[0].ventaDeAqua1 = index[0];
            }else if(indexVendedores[0] === "2"){
                vendedores[1].ventaDeAqua2 = index[0];
            }

        }else if(productos[0].carrito1 ===true){
            index[0]++;

            if(indexVendedores[0] === "1"){
                vendedores[0].dineroObtenido1 += productos[0].costo1;
                vendedores[0].ventaDeAqua1 = index[0];
            }else if(indexVendedores[0] === "2"){
                vendedores[1].dineroObtenido2 += productos[0].costo1;
                vendedores[1].ventaDeAqua2 = index[0];
            }

        }
        cantidadesProductos[indexCajas[0]].innerHTML = `${index[0]}`;
    }else if(nameBtn === "btn2"){
        if(productos[1].carrito2 === false){
            elementosCarrito(productos[1].costo2);
            imgElement.src = "https://th.bing.com/th/id/OIP.SkKHlJjodSoCqoqXcqWsPgAAAA?pid=ImgDet&rs=1";
            h6Element.innerHTML=`${productos[1].nombreProducto2} $${productos[1].costo2}`;
            cantidadesProductos = document.querySelectorAll(".cantidadProducto");
            index[1] = 1;
            productos[1].carrito2 = true;
            indexCajas[1] = contadorCajas;
            indexVendedores[1] = vendedor;

            if(indexVendedores[1] === "1"){
                vendedores[0].ventaDeEmocion1 = index[1];
            }else if(indexVendedores[1] === "2"){
                vendedores[1].ventaDeEmocion2 = index[1];
            }

        }else if(productos[1].carrito2 === true){
            index[1]++;

            if(indexVendedores[1] === "1"){
                vendedores[0].dineroObtenido1 += productos[1].costo2;
                vendedores[0].ventaDeEmocion1 = index[1];
            }else if(indexVendedores[1] === "2"){
                vendedores[1].dineroObtenido2 += productos[1].costo2;
                vendedores[1].ventaDeEmocion2 = index[1];
            }

        }
        cantidadesProductos[indexCajas[1]].innerHTML = `${index[1]}`;
    }else if(nameBtn === "btn3"){
        if(productos[2].carrito3 === false){
            elementosCarrito(productos[2].costo3);
            imgElement.src = "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00334966600792l.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF";
            h6Element.innerHTML=`${productos[2].nombreProducto3} $${productos[2].costo3}`;
            cantidadesProductos = document.querySelectorAll(".cantidadProducto");
            productos[2].carrito3 = true;
            index[2] = 1;
            indexCajas[2] = contadorCajas;
            indexVendedores[2] = vendedor;

            if(indexVendedores[2] === "1"){
                vendedores[0].ventaDeAlegria1 = index[2];
            }else if(indexVendedores[2] === "2"){
                vendedores[1].ventaDeAlegria2 = index[2];
            }

        }else if(productos[2].carrito3 === true){
            index[2]++;

            if(indexVendedores[2] === "1"){
                vendedores[0].dineroObtenido1 += productos[2].costo3;
                vendedores[0].ventaDeAlegria1 = index[2];
            }else if(indexVendedores[2] === "2"){
                vendedores[1].dineroObtenido2 += productos[2].costo3;
                vendedores[1].ventaDeAlegria2 = index[2];
            }
        }
        cantidadesProductos[indexCajas[2]].innerHTML = `${index[2]}`;
    }else if(nameBtn === "btn4"){
        if(productos[3].carrito4 === false){
            elementosCarrito(productos[3].costo4);
            imgElement.src = "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/3da27479-d685-433d-ade1-a691b8f3702f.49e39a5d0859b7465b3fb1a5b5ccdc12.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF";
            h6Element.innerHTML=`${productos[3].nombreProducto4} $${productos[3].costo4}`;
            cantidadesProductos = document.querySelectorAll(".cantidadProducto");
            productos[3].carrito4 = true;
            index[3] = 1;
            indexCajas[3] = contadorCajas;
            indexVendedores[3] = vendedor;

            if(indexVendedores[3] === "1"){
                vendedores[0].ventaDeFrescura1 = index[3];
            }else if(indexVendedores[3] === "2"){
                vendedores[1].ventaDeFrescura2 = index[3];
            }

        }else if(productos[3].carrito4 === true){
            index[3]++;

            if(indexVendedores[3] === "1"){
                vendedores[0].dineroObtenido1 += productos[3].costo4;
                vendedores[0].ventaDeFrescura1 = index[3];
            }else if(indexVendedores[3] === "2"){
                vendedores[1].dineroObtenido2 += productos[3].costo4;
                vendedores[1].ventaDeFrescura2 = index[3];
            }
        }
        cantidadesProductos[indexCajas[3]].innerHTML = `${index[3]}`;
    }

}

for(i=0; i<=3; i++){
    botonesComprar[i].addEventListener("click", function(evento){
        ponerProductosEnCarrito(this.name);
    })
}

btnPagar.addEventListener("click" , () =>{
    alert(vendedores[0].ventaDeAqua1);
    alert(vendedores[1].ventaDeEmocion2);
    vendedores[0].productosVendidos1 = vendedores[0].ventaDeAlegria1 + vendedores[0].ventaDeAqua1 + vendedores[0].ventaDeEmocion1 + vendedores[0].ventaDeFrescura1;
    vendedores[1].productosVendidos2 = vendedores[1].ventaDeAlegria2 + vendedores[1].ventaDeAqua2 + vendedores[1].ventaDeEmocion2 + vendedores[1].ventaDeFrescura2;

    if(vendedores[0].productosVendidos1 > vendedores[1].productosVendidos2){
        vendedorPrincipal = `${vendedores[0].personal1} con ${vendedores[0].productosVendidos1} productos, mientras que el secundario fue: ${vendedores[1].personal2} con ${vendedores[1].productosVendidos2} productos`;

    }else if(vendedores[0].productosVendidos1 < vendedores[1].productosVendidos2){
        vendedorPrincipal = `${vendedores[1].personal2} con ${vendedores[1].productosVendidos2} productos, mientras que el secundario fue: ${vendedores[0].personal1} con ${vendedores[0].productosVendidos1} productos`;

    }else{
        vendedorPrincipal = `los 2, la vendedora ${vendedores[0].personal1} y el vendedor ${vendedores[1].personal2} fueron sus principales vendedores con ${vendedores[0].productosVendidos1} productos`;

    }

    alert(`El total a pagar es: $${vendedores[0].dineroObtenido1 + vendedores[1].dineroObtenido2} uds \nSu vendedor principal fue: ${vendedorPrincipal}`);
});