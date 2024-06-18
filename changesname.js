const inputname = document.getElementsByName('CName')[0];
const inputnfam = document.getElementsByName('CSurname')[0];
const images = document.getElementsByClassName('img-slider');


function showImage(n) {
    if (n >= images.length) {
      index = 0;
    } else if (n < 0) {
      index = images.length - 1;
    } else {
      index = n;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
  }

const placeholders = [
  { name: 'Timur', surname: 'Khlobystov' },
  { name: 'Temirlan', surname: 'Moldakhmetov' },
  { name: 'Введите ваше имя', surname: 'Введите вашу фамилию' }
];
let index = 0;

setInterval(() => {
  inputname.placeholder = placeholders[index].name;
  inputnfam.placeholder = placeholders[index].surname;
  index = (index+1);
  showImage(index)
}, 2000);
showImage(0)
