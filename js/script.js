// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguesa = document.getElementById('menuHamburguesa');
    const mobileMenu = document.getElementById('mobileMenu');

    menuHamburguesa.addEventListener('click', () => {
        if (mobileMenu.classList.contains('d-none')) {
            mobileMenu.classList.remove('d-none');
            mobileMenu.classList.add('d-block');
        } else {
            mobileMenu.classList.remove('d-block');
            mobileMenu.classList.add('d-none');
        }
    });

    const botonesAgregar = document.querySelectorAll('.producto button');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });
});

