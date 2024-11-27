
let userNameValidation = false
do {
    let nombreCliente = prompt("Por favor, ingrese su nombre")
    if (nombreCliente) {
        userNameValidation = true
        alert("Bienvenido " + nombreCliente)
    } else {
        userNameValidation = false
        alert("No ingreso un nombre")
    }
} while (userNameValidation == false)

function tienda() {
    alert("Bienvenido a la tienda")
    let check;
    do {
        let opciones = prompt("Para comprar una computadora ingrese 1\nPara comprar un celular ingrese 2\nPara comprar un monitor ingrese 3")
        opciones = parseInt(opciones, 10)
        switch (opciones) {
            case 1:
                check = confirm("¿Quiere comprar una computadora?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y un vendedor se comunicara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
                break;
            case 2:
                check = confirm("¿Quiere comprar una celular?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y un vendedor se comunicara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
                break;
            case 3:
                check = confirm("¿Quiere comprar una monitor?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y un vendedor se comunicara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
                break;
            default:
                alert("Opción no valida")
                check = false
                break;
        }
    } while (check == false)
};

function servicios() {
    alert("Bienvenido a Servicios")
    let check;
    do {
        let opciones = prompt("Para reparación de computadoras ingrese 1\nPara consultar por tratamiento de RAEES ingrese 2")
        opciones = parseInt(opciones, 10)
        switch (opciones) {
            case 1:
                check = confirm("¿Desea consultar por el servicio de reparación de computadoras?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y uno de nuestros técnicos se contactara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
                break;
            case 2:
                check = confirm("¿Desea consultar por el servicio de tratamiento de RAEES?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y uno de nuestros asesores se contactara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
            break;
            default:
                alert("Opción no valida")
                check = false
                break;
            
        }

    } while (check == false)

};

let control;
do {
    if (userNameValidation == true) {
        let opciones = prompt("Elija 1 para proceder a la tienda o 2 para ver los servicios")
        opciones = parseInt(opciones, 10)
        switch (opciones) {
            case 1:
                control = true
                tienda()
                break;
            case 2:
                control = true
                servicios()
                break;
            default:
                alert("Opción no valida")
                control = false
                break;
        }
    }

} while (control == false);

