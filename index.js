var nameInput = document.getElementById('name');
var soyadInput = document.getElementById('soyad');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');

document.querySelector('form.form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    var cache = {
        ad : nameInput.value,
        soyadı : soyadInput.value,
        emaili: emailInput.value,
        telefon: phoneInput.value,

    }
    console.log(cache);
});
