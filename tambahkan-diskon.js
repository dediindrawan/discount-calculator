// initialize variable
const form = document.getElementById('form');
const priceInput = document.getElementById('price');
const discountInput = document.getElementById('discount');

// execute form when submit button onclick by user
form.addEventListener('submit', (e) => {
    // hold submitted progress only on main page
    e.preventDefault();

    // execute calculation
    if (priceInput.value == '' || discountInput.value == '') {
        // show alert
        document.querySelector('.alert').style.display = 'block';
    } else {
        // convert string to number
        const convertPrice = parseInt(priceInput.value);
        const convertDiscount = parseInt(discountInput.value);

        // execute value & show result
        const calculate = convertPrice * convertDiscount / 100;
        const result = convertPrice + calculate;

        document.querySelector('.wrapper-result').innerHTML =
            `
            <small>Rp</small>
            <h2 class="result">${result}</h2>
            `;

        document.querySelector('.result').style.fontSize = '2rem';

        document.querySelector('.alert').style.display = 'none';
    };
});