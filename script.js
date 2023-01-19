class Producto{
    constructor(tipoEquipo, delivery, precio){
    this.tipoEquipo = tipoEquipo;
    this.delivery = delivery;
    this.precio = parseFloat(precio); 
    }
    getPrecioConEnvio() {
        if(this.delivery == "one day"){
            return this.precio + 3
        }else if(this.delivery == "standard"){
            return this.precio + 1
        }else{
            return 0;
        }
    }
    sumarIva(){
       return this.getPrecioConEnvio() * 1.21
    }

}

const carrito = []

const precios = {
  "mancuerna": 10,
  "discos": 15,
  "cajones": 20,
  "pelotas": 25
}

let comprar = prompt("Desea comprar algo?")

while (comprar != "no") {
    let productName = prompt("Ingresa el nombre del equipo que desea comprar: ")
    let product = new Producto(productName, "", precios[productName])
    let deliveryType = prompt("Ingrese el tipo de envio standard o one day: ")
    product.delivery = deliveryType
    if (product.tipoEquipo == "mancuerna" && product.delivery == "one day") {
      console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
      + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "mancuerna" && product.delivery == "standard") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "discos" && product.delivery == "one day") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "discos" && product.delivery == "standard") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "cajones" && product.delivery == "one day") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "cajones" && product.delivery == "standard") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "pelotas" && product.delivery == "one day") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }if (product.tipoEquipo == "pelotas" && product.delivery == "standard") {
        console.log("ud ha agregado al carrito " + product.tipoEquipo + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio() + " y un total con iva includo de: " + product.sumarIva())
    }
        
    carrito.push(product)
    comprar = prompt("Desea comprar algo más?")
}