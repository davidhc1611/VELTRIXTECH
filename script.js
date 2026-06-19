// ======================================
// VELTRIX TECH
// script.js
// ======================================

console.log("VELTRIX TECH");

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            destino.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// Efecto del header al hacer scroll
window.addEventListener("scroll", ()=>{

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }else{

        header.style.background = "rgba(5,8,22,.82)";
        header.style.boxShadow = "none";

    }

});


// ======================================
// FORMULARIO WHATSAPP
// ======================================

const formulario = document.getElementById("formulario-contacto");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;
        let mensaje = document.getElementById("mensaje").value;

        let texto = `*NUEVA SOLICITUD - VELTRIX TECH*

👤 Nombre: ${nombre}

📧 Correo: ${correo}

📱 Teléfono: ${telefono}

💬 Proyecto:
${mensaje}`;

        let url = `https://wa.me/51991392639?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}