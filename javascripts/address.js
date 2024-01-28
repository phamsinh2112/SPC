showAddress();
const saveDataButton = document.querySelector('.save-data');
saveDataButton.addEventListener('click', saveData);
function saveData(event) {
    event.preventDefault(); // Prevent form submission

    var fullNameInput = document.getElementById('name');
    var telephoneInput = document.getElementById('number');
    var streetInput = document.getElementById('Street');
    var cityInput = document.getElementById('City');
    var formData = {
        fullName: fullNameInput.value,
        telephone: telephoneInput.value,
        street: streetInput.value,
        city: cityInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData)
    window.location.href = 'order.html';
    
}