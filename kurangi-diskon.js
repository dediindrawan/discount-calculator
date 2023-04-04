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
        // document.querySelector('.alert').style.display = 'block';
        alert('Kolom input tidak boleh ada yang kosong!');
    } else {
        // show result
        const calculate = (priceInput.value * discountInput.value) / 100;

        const result = priceInput.value - calculate;

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