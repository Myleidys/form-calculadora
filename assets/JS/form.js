const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeApellido = document.getElementById('mensajeAlertaApellido')
const mensajeTelefono = document.getElementById('mensajeAlertaTelefono')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajePassword = document.getElementById('mensajeAlertaPassword')
const mensajeAlertaTyC = document.getElementById('mensajeAlertaTyC')



function ValidadFormulario(e) {
    e.preventDefault()
    let inputName = document.getElementById('name').value
    console.log(inputName)

    let inputApellido = document.getElementById('apellido').value
    console.log(inputApellido)

    let inputTelefono = document.getElementById('telefono').value
    console.log(inputTelefono)

    let inputCorreo = document.getElementById('correo').value
    console.log(inputCorreo)

    let inputPassword = document.getElementById('password').value
    console.log(inputPassword)


    const inputTyC = document.getElementById('inputTyC')
    console.log(inputTyC)


    if (inputName == '') {
        //mensajeNombre.innerText = "el campo esta vacio, ingresa el nombre"
        swal("Error", "diligencia el campo nombre", "error");
    } else if (inputApellido == '') {
        // mensajeApellido.innerText = "el campo esta vacio,ingresa el apellido "
        swal("Error", "diligencia el campo apellido", "error");
    } else if (inputTelefono == '') {
        //mensajeTelefono.innerText = "el campo esta vacio,ingresa el telefono"
        swal("Error", "diligencia el campo telefono", "error");
    } else if (inputCorreo == '') {
        //mensajeCorreo.innerText = "el campo esta vacio,ingresa el correo"
        swal("Error", "diligencia el campo correo", "error");
    } else if (inputPassword == '') {
        //mensajePassword.innerText = "el campo esta vacio,ingresa el password"
        swal("Error", "diligencia el campo password", "error");
    }

    if (inputTyC.checked == false) {
        //mensajeAlertaTyC.innerText = 'Acepta terminos y condiciones'
        swal("Error", "selecciona Acepta terminos y condiciones", "error");
    }


    if (inputName != "" && inputApellido != "" && inputTelefono != "" && inputCorreo != "" && inputPassword != "" && inputTyC.checked) {
        swal("¡Muy Bien!", "Registro exitoso", "succes");
        setTimeout(() => {
            window.location = 'calculadora.html'
        }, 3000)

    }
}