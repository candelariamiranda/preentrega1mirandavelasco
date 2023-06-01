// TIENDA ONLINE

class Producto{
    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("<------------->")
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    venta_stock(cantidad){
        // CHEQUEO QUE LAS UNIDADES SEAN MENOR A LA CANTIDAD DE STOCK
        if( this.stock >= cantidad){
            this.stock = this.stock - cantidad;
            return true
        }
        else{
            return false
        }
    }
}


let opcion = prompt("1.Ingresar al administrador para cargar un nuevo producto 2.Comprar productos")

//FUNCIONALIDAD DE ADMINISTRADOR
//ALTA DE PRODUCTOS

let lista_productos = []

if( opcion == 1 ){
    for(let i = 0 ; i < 5 ; i = i + 1){
        let nombre = prompt("Ingresar el nombre del producto");
        let precio = prompt("Ingresar el precio del producto");
        let stock = prompt("Ingresar el stock del producto");

        let producto = new Producto (nombre , precio , stock);

        lista_productos.push(producto);
    }
}

//FIN ALTA DE PRODUCTOS


//FUNCIONALIDAD DE USUARIO

//INICIO RENDER DE PRODUCTOS

else if(opcion == 2){

    console.log("Lista de Productos");

    for( let producto of lista_productos){

        producto.get_datos();
    }
}

// FIN DEL RENDER

//SIMULO COMPRA DE USUARIO

function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el nombre del producto que quiere comprar");

let resultado_busqueda = lista_productos.find( buscar_producto );

if( resultado_busqueda != undefined ){
    //SE ENCONTRO EL PRODUCTO QUE QUIERE COMPRAR

    if(resultado_busqueda.get_stock()){
        console.log("Tenemos stock del producto: " , resultado_busqueda.nombre);

        let unidades = prompt("Cuantas unidades queres?");
        if( resultado_busqueda.venta_stock(unidades)){
            console.log(`Gracias por comprar ${unidades} unidades de ${resultado_busqueda.nombre}`);
        }
        else{
            console.log("No se puede realizar la compra");
            console.log("Stock disponible: " , resultado_busqueda.stock);
        }
        
    }
    else{
        console.log("No tenemos stock del producto: ", resultado_busqueda.nombre);
    }

    resultado_busqueda.get_datos();
}
else{
    console.log("No se encontro el producto: ", compra_usuario);
}

//FIN SIMULACION DE COMPRA

//INSTANCIA PARA SABER SI SE APLICA O NO DESCUENTO EN LA COMPRA

function calcular_pago( subtotal_compra , cuotas ){

    subtotal_compra = parseFloat(subtotal_compra);
    cuotas = parseInt(cuotas);

    let subtotal_pago = 0;

    if( subtotal_compra > 0 && cuotas == 3 ){
        subtotal_pago = subtotal_compra + ( subtotal_compra * 0.27);
        return subtotal_pago
    }

    else if( subtotal_compra > 0 && cuotas == 6 ){
        subtotal_pago = subtotal_compra + ( subtotal_compra * 0.54);
        return subtotal_pago
    }

    else if( subtotal_compra > 0 && cuotas == 12 ){
        subtotal_pago = subtotal_compra + ( subtotal_compra * 0.108);
        return subtotal_pago
    }

    else if( subtotal_compra > 0 && cuotas == 1 ){
        return subtotal_compra
    }
}

function aplica_descuento( resultado_pago , estado_usuario , cantidad_articulos ){

    cantidad_articulos = parseInt(cantidad_articulos);

    if( estado_usuario == "SI" && cantidad_articulos > 10 ){
        let descuento = resultado_pago - ( resultado_pago * 0.15 );
        return descuento
    }

    else{
        return 0;
    }

}

console.log ("Bienvenido/a al carrito de compras de HEREDERO DE VULCANO herreria :)");

let cantidad_articulos = "";

while( cantidad_articulos != "SALIR"){

    cantidad_articulos = prompt("Enterate si aplicas al 15 OFF! Ingresa la cantidad de articulos que deseas o ingresa SALIR para finalizar");

    if( cantidad_articulos != "SALIR" ){
        let subtotal_compra = prompt("Ingrese el total de su compra");
        let estado_usuario = prompt("Estas suscripto/a: ingresa SI o NO en mayuscula");
        let cuotas = prompt("Ingresa en cuantas cuotas queres pagar: 1, 3, 6 o 12");

        let resultado_pago = calcular_pago( subtotal_compra , cuotas );
        let resultado_descuento = aplica_descuento( resultado_pago , estado_usuario , cantidad_articulos );

        console.log("Pediste: ", cantidad_articulos , "articulos");
        console.log("La suma de los articulos elegidos es de: ", subtotal_compra , "pesos");
        console.log("Elegiste pagar en: ", cuotas , "cuota/s");
        console.log("Tu total es de: ", resultado_pago , "pesos");
        
        if( resultado_descuento != 0 ){
            console.log("Con el descuento del 15% por estar suscripto/a y comprar mas de 10 articulos: ", resultado_descuento);
        }
    }
    
}

