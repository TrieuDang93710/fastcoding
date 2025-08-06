
export function addClass() {
    const navLinks = document.querySelectorAll('.header__nav a');

    navLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            // e.preventDefault();
            navLinks.forEach(el => {
                el.classList.remove('active');
            });
            element.classList.toggle('active');
        });
    });
}
