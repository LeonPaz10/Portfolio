document.getElementById("submit").addEventListener("click", mensajeEnviado);
const mensajeEnviado = () => {

    Swal.fire({
        title: "Mensaje enviado",
        text: "Gracias por contactarnos, en breve nos comunicaremos con usted",
        icon: "success",
        confirmButtonText: "Cerrar"
});
}
