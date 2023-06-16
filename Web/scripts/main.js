// Carrito de compras

const car = document.querySelector('.header__cart');
const productCar = document.querySelector('.shop');

const closeIcon = document.querySelector('#shopcar__x');

car.addEventListener('click', toogleCarritoAside);
closeIcon.addEventListener('click', toogleCarritoAside);

function toogleCarritoAside() {
    loger.classList.add('inactive');
    categories.classList.add('inactive');
    productCar.classList.toggle('inactive');
}

// Panel de login

const person = document.querySelector('.header__account');
const loger = document.querySelector('.login');
const arrow2 = document.querySelector('.header__arrow2');

person.addEventListener('click', toogleLogin);

function toogleLogin() {
    productCar.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    categories.classList.add('inactive');
    arrow2.classList.toggle('rotate');
    loger.classList.toggle('inactive');
}

// Categories

const allCategories = document.querySelector('.header__search--category');
const categories = document.querySelector('.Categories');
const arrow = document.querySelector('.header__arrow');
const options = document.querySelectorAll('.sublists');
const sBtn_text = document.querySelector('.sBtn_text');

allCategories.addEventListener('click', toogleCategory);

function toogleCategory() {
    loger.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productCar.classList.add('inactive');
    arrow.classList.toggle('rotate');
    categories.classList.toggle('inactive');
}

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectedOption;
        arrow.classList.remove('rotate');
        categories.classList.add('inactive');
    })
});

// Menu Mobile

const burgger = document.querySelector('.header__list');
const mobileMenu = document.querySelector('.menuMobile');
const closeIconBurgger = document.querySelector('#menu__x');

burgger.addEventListener('click', toogleBurgger);
closeIconBurgger.addEventListener('click', toogleBurgger);

function toogleBurgger() {
    productCar.classList.add('inactive');
    loger.classList.add('inactive');
    categories.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}