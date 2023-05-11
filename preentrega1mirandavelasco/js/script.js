// TIENDA ONLINE


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

    cantidad_articulos = prompt("Ingrese la cantidad de articulos que desea o ingrese SALIR para finalizar");

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