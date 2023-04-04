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
        // show result
        const calculateOne = (priceInput.value * (discountInputOne.value / 100));
        const calculateTwo = (calculateOne * (discountInputTwo.value / 100));

        const calculateAll = calculateOne + calculateTwo;

        const result = priceInput.value - calculateAll;

        document.querySelector('.wrapper-result').innerHTML =
            `
            <small>Rp</small>
            <h2 class="result">${result}</h2>
            `;

        document.querySelector('.alert').style.display = 'none';
    };

    // clear input after submitted
    priceInput.focus();
});