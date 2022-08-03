console.log("Hola consola , A&T")
console.log("El arte de la programacion es la habilidad de controlar la complejidad. Un gran programa es moderado, hecho simple en su complejidad")

//EJEMPLO DE IF ..ELSE


let nombreUsuario = prompt("ingresar tu Nombre y Apellido");

if (nombreUsuario == ""){
    alert("No ingresaste ningun nombres");
}
else {
    alert("Bienvenido a Inversiones A&T, " + nombreUsuario);
}

let carrito = []

// Creo mis servicios
class servicios {
    constructor(formaciones, tipodeinversion, precio, tipodeinversionista, exchange) {
        this.formaciones = formaciones
        this.tipodeinversion = tipodeinversion
        this.precio = precio
        this.tipodeinversionista = tipodeinversionista
        this.exchange = exchange
    }
}

const servicios1 = new servicios("A", ["acciones","forex","criptoactivo"], 1500, ["conservador"],["tradingview","binance","Quantfury"])
const servicios2 = new servicios("B", ["criptoactivo","acciones","forex"], 2500, ["moderado"],["tradingview","binance","Quantfury"])
const servicios3 = new servicios("C", ["forex","acciones","criptoactivo"], 3500, ["agresivo"],["tradingview","binance","Quantfury"])


const servicio = [servicios1, servicios2, servicios3]


const editarProductoSeleccionado = (servicioSeleccionado) => {
    const productoElegido = {
        id: servicioSeleccionado.id,
        tipodeinversion: servicioSeleccionado.tipodeinversion,
        precio: servicioSeleccionado.precio,
        tipodeinversionista: servicioSeleccionado.tipodeinversionista,
        exchange: servicioSeleccionado.exchange,
       
        
        
    }
    productoElegido.formaciones = alert("¡Tenemos Formaciones para todo tipo de trader!")
    productoElegido.tipodeinversion = Number(prompt('Que mercado va a operar, existe una variada gama: ' + servicioSeleccionado.tipodeinversion.join('-') + " y más!"))
    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

    return productoElegido
}


const seleccionarProducto = () => {
const seleccionUsuario = prompt("¿Como quieres distribuir tu PORTAFOLIO? | conservador, moderado o agresivo |").toLowerCase()

    switch (seleccionUsuario) {
        case 'conservador':
            let ingresarNumero = parseInt(prompt("Ingresa tu capital inicial:"));
            for (let i = 8 ; i <= 8; i++) {
                let resultado = ingresarNumero + i ;
                alert(ingresarNumero +" con una rentabilidad mensual de "+ i +" % " + "=" + resultado);
            }
            console.log(ingresarNumero)
            carrito.push(editarProductoSeleccionado(servicios1))
            break
        case 'moderado':
            let ingresarNumero1 = parseInt(prompt("Ingresa tu capital inicial:"));
            for (let i = 11 ; i <= 11; i++) {
                let resultado = ingresarNumero1 + i ;
                alert(ingresarNumero1 +" con una rentabilidad mensual de "+ i +" % " + "=" + resultado);
            }
            carrito.push(editarProductoSeleccionado(servicios2))
            break
        case 'agresivo':
            let ingresarNumero2 = parseInt(prompt("Ingresa tu capital inicial:"));
            for (let i = 17 ; i <= 17; i++) {
                let resultado = ingresarNumero2 + i ;
                alert(ingresarNumero2 +" con una rentabilidad mensual de "+ i +" % " + "=" + resultado);
            }
            carrito.push(editarProductoSeleccionado(servicios3))
            break
        default:
            console.log('Por favor, elegi una opcion')
            break
    }

    if (alert('Gracias por visitarnos!')) {
        seleccionarProducto()
    }
}


// Funcion para sumar el total de mis productos
const sumarTotalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}


// EJECUCIONES
seleccionarProducto()

alert('Gracias por su compra, su total es de $' + sumarTotalCarrito())
console.log('Gracias por su compra, su total es de $' + sumarTotalCarrito())









