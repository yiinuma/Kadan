document.addEventListener('scroll', function () {
    const header = document.querySelector('.l-header');
    const headerIn = document.querySelector('.p-header__inner');
    const burger = document.querySelector('.c-burger');
    const scroll = window.pageYOffset;

    if (scroll > 0) {
        header.classList.add('scrolled');
        headerIn.classList.add('scrolled');
        burger.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        headerIn.classList.remove('scrolled');
        burger.classList.remove('scrolled');
    }

});