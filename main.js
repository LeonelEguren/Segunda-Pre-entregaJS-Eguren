
//  Que deberia hacer este codigo?
// 1 -preguntar en que tipo de divisa queres hacer un plazo fijo
//2- filtrar  el objeto divisa con sus atributos particulares
// 3- pedirle al usuario una cantidad de dias para el plazo fijo
// 4- calcular la taza de interes en base a la divisa y a la cantida de dias
// 5 - mostrar un alert con la taza de interes
// 6- monstrar un alert con el monto total
// 7- preguntarle al usuario si quiere volver a calcular
//8- volver a comenzar o cerrar el ciclo en base a punto 7

let resutadoFinal=0
let resultado = 0
let monedaNombre = ""
let volverACotizar = false;
let diasDePlazo = 0
let deposito = 0


const PlazoFijo = () => {

    do {
        monedaNombre = prompt("En que moneda queres cotizar?" + divisas.map(divisa => {
            return "\n" + '- ' + divisa.nombre + ' $' + divisa.tazaDeInteres
        }))
        const divisa = divisas.find(divisa => divisa.nombre.toLowerCase() === monedaNombre.toLowerCase())
        diasDePlazo = parseInt(prompt("Durante cuantos dias queres dejar tu dinero?"))
        while (Number.isNaN(diasDePlazo) || diasDePlazo === 0){
        if (diasDePlazo !== 0) {
            alert("Debes agregar un numero")
        } else {
            alert("Debes agregar un numero distinto a cero")
        }diasDePlazo = parseInt(prompt("Durante cuantos dias queres dejar tu dinero?"))
    }
    
        deposito = parseInt(prompt("Cuanto queres depositar?"))
        
        while (Number.isNaN(deposito) || deposito === 0) {
            if (deposito !== 0) {
                alert("Debes agregar un numero")
            } else {
                alert("Debes agregar un numero distinto a cero")
            }
            deposito = parseFloat(prompt("Cuanto dinero queres depositar?"))
        }
    
        if (monedaNombre == divisa.nombre) {
            resultado = deposito * (divisa.tazaDeInteres * diasDePlazo / 365)
            resutadoFinal=deposito+resultado
            alert("El monto de intereses ganados es: " + resultado.toFixed(2))
            alert("El monto final es:"+"$"+resutadoFinal.toFixed(2))
        } else {
            alert("debes elegir una moneda valida")
        }
        volverACotizar = confirm("queres volver a cotizar?");
    } while (volverACotizar);
} 
PlazoFijo()
alert("Muchas gracias! vuelva pronto!")





// codigo primera pre entrega para comparar las funciones
// /varianles
// let tazaAnualPesos = 0.30;
// let tazaAnualDolares = 0.20;
// let tazaMensual = 0;
// let montoFinal = 0;
// let volverACalcular = false;
// let tipoMoneda = "";

// //funciones
// function depositoF() {
//     deposito = parseFloat(prompt("Cuanto dinero queres depositar?"))
//   while (Number.isNaN(deposito) || deposito === 0) {
//         if (deposito !== 0) {
//             alert("debe agregar un numero")
//         } else {
//             alert("debe agregar un numero distinto a cero")
//         }
//         deposito = parseFloat(prompt("Cuanto dinero queres depositar?"))
//     }
//     return (deposito)
// }



// function diasF() { dias = parseInt(prompt("Durante cuantos dias queres dejar depositado tu dinero ? ")) }
// function interesesGanadosF() {
//     if (tipoMoneda == "pesos") {
//         interesesGanados = deposito * (tazaAnualPesos * dias / 365)
//         alert(" Si depositas  " + " $ " + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
//         montoFinal = interesesGanados + deposito
//         alert("El monto final sera : " + " $ " + montoFinal.toFixed(2));
//     }
//     else if (tipoMoneda == "dolares") {
//         interesesGanados = deposito * (tazaAnualDolares * dias / 365)
//         alert(" Si depositas  " + " u$s" + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
//         montoFinal = interesesGanados + deposito
//         alert("El monto final sera : " + " u$s " + montoFinal.toFixed(2));
//     }
// }

// //Ciclo
// alert("Hola! Este es un simulador de plazos fijos")
// do {

//     tipoMoneda = prompt("Queres calcular un plazo en pesos o en dolares?").toLowerCase()
//     switch (tipoMoneda) {
//         case "pesos":
//             depositoF()
//             diasF()
//             interesesGanadosF()
//             break;
//         case "dolares":
//             depositoF()
//             diasF()
//             interesesGanadosF()
//             break;
//         default:
//             alert(" El tipo de moneda no es correcto")
//             break;

//     }

//     volverACalcular = confirm("Queres calcular un nuevo plazo fijo?")
//     if (volverACalcular == true) {
//         alert(" Perfecto! ingrese nuevos datos!")

//     }
// } while (volverACalcular);
// alert("Muchas gracias! vuelva pronto!")