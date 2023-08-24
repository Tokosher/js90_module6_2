// const input = document.querySelector('input');

// function onChangeHandler (event) {
//     console.log(event);
// }

// input.addEventListener('input', onChangeHandler)
// const textarea = document.querySelector('textarea');
// const select = document.querySelector('select');

// const handler = (e) => {
//     // console.log(e.currentTarget);

//     console.log(e.currentTarget.value);
//     console.log(e.currentTarget.textContent);
// }

// select.addEventListener('input', handler);

// document.addEventListener('keydown', event => {
//     console.log(event)
//     console.log(event.key);
//     console.log(event.code);
//     console.log(event.keyCode);
// })




// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі

// const button = document.querySelector('.js-click');
// const div = document.querySelector('.js-box');

// let step = 0;
// button.addEventListener('click', () => {
//     step += 50;
//     div.style.marginTop = `${step}px`;
//     div.style.marginLeft = `${step}px`;
// })


// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input

// const inputElement = document.querySelector('.js-user-name');

// inputElement.addEventListener('input', event => {
//     console.log(event.currentTarget.value);
// })



// *********Подія change********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням

// const inputElement = document.querySelector('.js-user-name');

// const handler = event => {
//     const inputValue = event.currentTarget.value;

//     alert(`${inputValue}, hello! Nice to meet you!`);
// }

// inputElement.addEventListener('change', handler)


// 
// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт






// *********Обробка комбінацій клавіш********* \\


// const hotKeyHandler = event => {
//     console.log(event)
//     if (event.ctrlKey && event.code === 'KeyC') {
//         console.log('Ctrl + C');
//     }
// }

// document.addEventListener('keydown', hotKeyHandler)


// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// function createMarkup(cars) { // cars - array
//     const result = cars.map(carData => {
//         const { car, type, price, img } = carData;
        
//         return `<li>
//         <img src="${img}" alt="${type}" class="car-image" />
//         <h2 class="car-title">${car}</h2>
//         <h3 class="car-type">${type}</h3>
//         <span class="car-price">${price}</span>
//         </li>`;
//     });

//     return result.join('');
// }

// const list = document.querySelector('.js-list');
// const markup = createMarkup(cars);

// list.insertAdjacentHTML('beforeend', markup);

// const form = document.querySelector('.js-form');
// const formButton = document.querySelector('.car-button');
// const formSelect = document.querySelector('.car-select');
// const carInput = document.querySelector('.car-input');

// form.addEventListener('submit', onSubmitHandler);

// function onSubmitHandler (event) {
//     event.preventDefault();

//     const inputValue = carInput.value;
//     const selectValue = formSelect.value; // 'car' or 'type'

//     const result = cars.filter(car => { // result - filtered array
//         return car[selectValue].toLowerCase().includes(inputValue.trim().toLowerCase());
//     })
    

//     list.innerHTML = createMarkup(result);
// }

/**
 * Забрати елементи зі сторінки
 * Навішуємо хенделри на create destroy
 * Create:
 * Забирараємо значення інпуту і створюємо цикл
 * Array with inline style - width height (збільшуємо на 10 px)
 * insertAdjucentElement(Array) (beforeend)
 * 
 * Destroy:
 * (div id="boxes").innerHTML = '';
 */