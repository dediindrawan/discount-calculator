// initialize variable
const form = document.getElementById('form');
const priceInput = document.getElementById('price');
const discountInputOne = document.getElementById('discount-1');
const discountInputTwo = document.getElementById('discount-2');

// execute form when submit button onclick by user
form.addEventListener('submit', (e) => {
    // hold submitted progress only on main page
    e.preventDefault();

    // execute calculation
    if (priceInput.value == '' || discountInputOne.value == '' || discountInputTwo.value == '') {
        // show alert
        // document.querySelector('.alert').style.display = 'block';
        alert('Kolom input tidak boleh ada yang kosong!');
    } else {
        // convert string to number
        const convertPrice = parseInt(priceInput.value);
        const convertDiscountOne = parseInt(discountInputOne.value);
        const convertDiscountTwo = parseInt(discountInputTwo.value);

        // execute value & show result
        const calculateOne = (convertDiscountOne / 100) * convertPrice;
        const calculateTwo = (convertDiscountTwo / 100) * (calculateOne + convertPrice);

        const result = convertPrice + calculateOne + calculateTwo;

        document.querySelector('.wrapper-result').innerHTML =
            `
            <small>Rp</small>
            <h2 class="result">${result}</h2>
            `;

        document.querySelector('.alert').style.display = 'none';
    };
});