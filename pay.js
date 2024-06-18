function getInfoBasketForPay() {
   // Получение данных из localStorage
var storedData = localStorage.getItem('containerData');

// Если данные существуют, преобразуйте их обратно из JSON и отобразите в div
if (storedData) {
    var retrievedData = JSON.parse(storedData);

    // Создайте новый элемент div для отображения данных
    var displayDiv = document.createElement('div');
    displayDiv.classList.add('display-container'); // добавьте класс, если нужно стилизовать контейнер

    // Переберите данные и добавьте их в элемент div
    retrievedData.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.textContent = item;
        displayDiv.appendChild(itemDiv);
    });

    // Добавьте созданный элемент div на страницу
    document.body.appendChild(displayDiv);
} else {
    console.log('Нет данных в localStorage');
}

}