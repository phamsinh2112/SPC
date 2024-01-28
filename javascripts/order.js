showAddress();
const selectOption = document.getElementById('selectOption');
selectOption.addEventListener('change', handleOptionChange);
function handleOptionChange() {
    const bankingElement = document.querySelector('.banking');
    if (selectOption.value === 'option2') {
        bankingElement.style.display = 'block';
    } else {
        bankingElement.style.display = 'none';
    }
}
const dataOrder = document.querySelector('.infor-text');
var data = localStorage.getItem('formData');
var getData = JSON.parse(data);
dataOrder.innerHTML = `<div class="infor-name">${getData.fullName}</div>
<div class="infor-phone">${getData.telephone}</div>
<div class="infor-address">${getData.street}</div>
<div class="infor-city">${getData.city}</div>`;