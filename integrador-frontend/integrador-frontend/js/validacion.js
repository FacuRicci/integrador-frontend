document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    // Evento de envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validarFormulario()) {
            // Enviar el formulario
            enviarFormulario();
        } else {
            console.log("El formulario no es válido");
        }
    });

    // Función para validar el formulario
    function validarFormulario() {
        let camposValidos = true;
        const camposRequeridos = document.querySelectorAll("[data-requerido='true']");
        
        camposRequeridos.forEach(function(campo) {
            if (campo.type === "checkbox") {
                if (!campo.checked) {
                    camposValidos = false;
                    mostrarError(campo, "Este campo es obligatorio");
                }
            } else if (campo.value.trim() === "") {
                camposValidos = false;
                mostrarError(campo, "Este campo es obligatorio");
            }
        });

        return camposValidos;
    }

    // Función para mostrar errores de validación
    function mostrarError(campo, mensaje) {
        const divError = document.createElement("div");
        divError.className = "error";
        divError.textContent = mensaje;

        const padre = campo.parentElement;
        padre.appendChild(divError);
        campo.classList.add("error-input");

        campo.addEventListener("input", function() {
            divError.remove();
            campo.classList.remove("error-input");
        });
    }

    // Función para enviar el formulario
    function enviarFormulario() {
        const datosFormulario = new FormData(form);
        
        fetch(form.getAttribute("action"), {
            method: form.getAttribute("method"),
            body: datosFormulario
        })
        .then(response => {
            if (response.ok) {
                console.log("Formulario enviado con éxito");
                // Aquí podrías agregar el código para mostrar un mensaje de éxito o redirigir a otra página
            } else {
                console.error("Error al enviar el formulario");
                // Aquí podrías agregar el código para manejar errores de envío
                throw new Error("No se pudo enviar el formulario");
            }
        })
        .catch(error => {
            console.error("Error al enviar el formulario:", error);
            // Aquí podrías agregar el código para manejar errores de red o del servidor
            alert("Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
        });
    }
});
