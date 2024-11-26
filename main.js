

    let producto1 = "computadora"
    let producto2 = "placa de video"
    let producto3 = "cables sata"
  
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
}while (userNameValidation == false );

