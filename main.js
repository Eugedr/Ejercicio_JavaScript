function totalAPagar(cantTickets, categoria) {
    const ValorTicket = 200;
    var total = cantTickets * ValorTicket;

    switch (categoria) {
        case "estudiante":
            total = total - (total * 80 / 100)
            break;
        case "trainee":
            total = total - (total * 50 / 100)
            break;
        case "junior":
            total = total - (total * 15 / 100)
            break;
    }
    return total
}

let boton = document.getElementById("LiveAlertBtn")


let formulario = document.getElementById("form_tickets")


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})


boton.addEventListener("click", () => {
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categoria").value

    let valor = totalAPagar(cantidad, categoria)

    let divMensaje = document.getElementById("LiveAlertPlaceholder")
    divMensaje.textContent = "Total a pagar: $" + valor
}

)