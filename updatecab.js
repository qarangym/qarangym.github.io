const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Получаем значения параметров запроса
const name1 = urlParams.get('name');
const surname1 = urlParams.get('surname');
const email1 = urlParams.get('email');

const doc = document

document.getElementById("name").setAttribute('value',name1)
document.getElementById("surname").setAttribute('value',surname1)
document.getElementById("email").setAttribute('value',email1)

if(email1==='moldakhmetov00@bk.ru'){
    window.location.href='admin.html'
}
// Делаем что-то с полученными значениямv
