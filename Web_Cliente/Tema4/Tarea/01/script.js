let IVA = 0.21
let listaProductos = []



class Producto {
    constructor(id, nome, prezoUnitario, stock, descripcion, emoji) {
        this.id = id
        this.nome = nome
        this.prezoUnitario = prezoUnitario
        this.stock = stock
        this.descripcion = descripcion
        this.emoji = emoji
    }
    calcularPrecioIva (){

    }
}

class ItemCarrito {
    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }

    calcularSubtotal(precio,cantidad){
        return precio*cantidad
    }

    actualizarCantidad(nuevacantidad){
        return this.cantidad = nuevacantidad
    }
}

class Carrito {
    constructor() {
        this.items = this.cargarCarrito() || [];
        this.limiteDescuento = 100;
        this.tasaDescuento = 0.10;
    }

    añadirItem(producto, cantidad){
        let itemExistente = this.items.find(p => p.producto.id === producto.id)
        if (itemExistente) {
            itemExistente.actualizarCantidad(itemExistente.cantidad + cantidad)
        }else{
            this.items.push(new ItemCarrito(producto, cantidad))
        }
        this.guardarItem();
    }

    guardarItem(){
        localStorage.setItem('carrito', JSON.stringify(this.items))
        renderizarCarrito();
    }
    eliminarItem(){

    }

    cargarCarrito(){
        const datosJSON = localStorage.getItem('carriño');
        if (!datosJSON) return null;

        const dadosCargados = JSON.parse(datosJSON);
        
        // É crucial RECONSTRUÍR as instancias para que os métodos funcionen
        return dadosCargados.map(itemData => {
            // 1. Reconstruír o Produto
            const produto = new Produto(
                itemData.produto.id,
                itemData.produto.nome,
                itemData.produto.prezoUnitario,
                itemData.produto.stock,
                itemData.produto.descripcion,
                itemData.produto.emoji
            );
            // 2. Reconstruír o ItemCarriño
            return new ItemCarriño(produto, itemData.cantidade);
        });
    }

    calcularTotal(){

    }
}

const miCarrito = new Carrito();

async function cargarProductosDeJson() {
    try {
        let respuesta = await fetch('./productos.json');
        if (!respuesta.ok) throw new Error("HTTP error " + respuesta.status);
            let datos = await respuesta.json();
            listaProductos = datos.map(p => new Producto(p.id, p.nome, p.prezoUnitario, p.stock, p.descripcion, p.emoji))                            
            renderizarProductosDisponibles();

    } catch (error) {
        console.error(error);
        let listaProductosU1 = document.getElementById('lista-productos')
        if (listaProductosU1) {
            listaProductosU1.innerHTML = `<li class="erro"> No se pudo cargar la lista de productos. Intente recargar la pagina.</li>`
        }            
    }
}

function renderizarProductosDisponibles() {
    let listaProductosU1 = document.getElementById('lista-productos')
    listaProductosU1.innerHTML=``


    for (let index = 0; index < listaProductos.length; index++) {     
        listaProductosU1.innerHTML+=`
        <li class="produto-item">${listaProductos[index].emoji} 
        <span>${listaProductos[index].nome}</span> 
        <p>${listaProductos[index].descripcion} 
        ${listaProductos[index].prezoUnitario}</p> 
        (IVE incluido) | Stock: ${listaProductos[index].stock} 
        <button type="button" data-id="${listaProductos[index].id}" class="btn-engadir">Engadir</button></li>
        `
    }
    
    let botones = document.querySelectorAll(".btn-engadir")
    botones.forEach(botonAñadir => {
        botonAñadir.addEventListener("click", () => {
            const id = Number(botonAñadir.dataset.id);
            let producto = listaProductos.find(p => p.id === id)
            miCarrito.añadirItem(producto, 1)                
        })
    })
    
}

function renderizarCarrito() {
    let resumenCarrito = document.getElementById("lista-carriño")

    resumenCarrito.innerHTML = ``

    for (let index = 0; index < miCarrito.items.length; index++) {
        console.log(miCarrito.items[index].producto);
        item = miCarrito.items[index]
        console.log(item);
        
   
        
        resumenCarrito.innerHTML += `
        <li class="carriño-item">${item.producto.nome} (x${item.cantidad}) | ${item.calcularSubtotal(item.producto.prezoUnitario, item.cantidad)} <button type="button" class="btn-eliminar">ELIMINAR</button></li> 
        `        
    }    
    
}

function renderizarTotal() {
    let resumen = document.getElementById("resumo-carriño")

    resumen.innerHTML=``

    for (let index = 0; index < array.length; index++) {
        resumenCarrito.innerHTML = ``
        
    }
}

document.addEventListener("DOMContentLoaded", async () =>{
    await cargarProductosDeJson();
    renderizarCarrito();
})


