
let userNameValidation = false
do{
    let nombreCliente = prompt ("Por favor, ingrese su nombre")
    if (nombreCliente){
        userNameValidation = true
        alert("Bienvenido "+ nombreCliente )
    }else{
        userNameValidation = false
        alert("No ingreso un nombre")
    }
}while (userNameValidation == false )

function tienda (){
    alert("Bienvenido a la tienda")
    let check;
    let producto;
    do{
        let opciones = prompt ("Para comprar una computadora ingrese 1\nPara comprar un celular ingrese 2\nPara comprar un monitor ingrese 3")
        opciones = parseInt(opciones, 10)
        switch(opciones){
            case 1:
                check = confirm("¿Quiere comprar una computadora?");
                break;
        }
    }while (check == false)
};

function servicios (){
    alert("servicios")

};

let control;
do{
    if (userNameValidation == true){
        let opciones = prompt ("Elija 1 para proceder a la tienda o 2 para ver los servicios")
        opciones = parseInt(opciones, 10)
        switch(opciones){
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

}while(control == false);

