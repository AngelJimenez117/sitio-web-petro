document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Navbar al hacer scroll
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* ==========================
       Animaciones al aparecer
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(
        "section, .card, .page-header, .feature-card"
    ).forEach(element => {

        element.classList.add("fade-up");

        observer.observe(element);

    });

    /* ==========================
       Búsqueda de colecciones
    ========================== */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".collection-item").forEach(item => {

                item.style.display =
                    item.innerText.toLowerCase().includes(value)
                        ? ""
                        : "none";

            });

        });

    }

    /* ==========================
       Botón volver arriba
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="bi bi-arrow-up"></i>';

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       Año automático footer
    ========================== */

    const year = document.getElementById("currentYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /* ==========================
       Tooltips Bootstrap
    ========================== */

    const tooltipTriggerList = [].slice.call(

        document.querySelectorAll('[data-bs-toggle="tooltip"]')

    );

    tooltipTriggerList.map(function (tooltipTriggerEl) {

        return new bootstrap.Tooltip(tooltipTriggerEl);

    });

});