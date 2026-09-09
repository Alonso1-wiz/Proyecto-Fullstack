
const formulario = document.querySelector("#form-contacto");


formulario.addEventListener('submit', function(e) {

    // Esto evita para que se recargue la pagina
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const motivo = document.querySelector("#motivo");
    const mensaje = document.querySelector("#mensaje");

    let formularioValido = true;



    // Esto sirve para poder validar los campos obligatorios
    const camposObligatorios = formulario.querySelectorAll('[required]');


    camposObligatorios.forEach(function(campo) {
        if (campo.value.trim() === ''){

            campo.classList.add("campo-error");

            formularioValido = false;
        
        } else {

            campo.classList.remove("campo-error");
        }

    });





//Validacion del correo

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (correo.value.trim() !== '' && !patronCorreo.test(correo.value.trim())) {

    correo.classList.add("campo-error");

    formularioValido = false;

} else if (correo.value.trim() !== "") {

    correo.classList.remove("console-error");
    
}


    
 // y para terminar el mensaje despues de llenar todos los campos
 
 if (formularioValido) {

    document.querySelector("#mensaje-confirmacion").textContent= "Mensaje enviado correctamente";
 }
 
});





