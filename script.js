
/* =====================================
   MENU MOBILE
===================================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const aberto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";

});


/* =====================================
   FECHAR MENU AO CLICAR EM UMA ABA
===================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.textContent = "☰";

    });

});


/* =====================================
   ANIMAÇÃO AO ROLAR A PÁGINA
===================================== */

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


elementos.forEach(elemento => {

    observer.observe(elemento);

});
