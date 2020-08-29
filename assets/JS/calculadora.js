let total = document.getElementById('resul')

function calculadora(opcion) {
    console.log(opcion)
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)



    switch (opcion) {
        case "suma":
            total.innerText = (num1 + num2)
            break;

        case "resta":
            total.innerText = (num1 - num2)
            break;

        case "multiplicacion":
            total.innerText = (num1 * num2)
            break;

        case "division":
            total.innerText = (num1 / num2)
            break;

        default:
            total.innerText = "la operacion es valida"
            break;

    }
}