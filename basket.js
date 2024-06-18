const basket = [];

function addItemToBasket(item) {
    const index = basket.findIndex((basketItem) => basketItem === item.innerHTML);
    if (index > -1) {
        deleteItemFromBasket(index);
    } else {
        item.querySelector("button").style.display = "none";
        basket.push(item.innerHTML);
    }
    displayBasket();
}

function displayBasket() {
    const basketDiv = document.getElementById('basket');

    basketDiv.innerHTML = ''; // Clear the previous content
    const labelDiv = document.createElement('div');
    labelDiv.innerHTML = '<h3><i class="fa fa-shopping-cart" aria-hidden="true"></i>'+'Basket:</h3>';
    basketDiv.appendChild(labelDiv);

    basket.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('d-flex', 'align-items-center', 'p-2', 'border', 'm-2', 'bg-light');
        itemDiv.style.whiteSpace = 'nowrap'; // Ensures the items stay in one line

        const textDiv = document.createElement('div');
        textDiv.innerHTML = item;
        itemDiv.appendChild(textDiv);

        basketDiv.appendChild(itemDiv);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
        deleteButton.addEventListener('click', () => {
            deleteItemFromBasket(index);
        });
        itemDiv.appendChild(deleteButton);
    });

    const buyButton = document.createElement('button');
    buyButton.innerHTML = 'Buy';
    buyButton.classList.add('btn', 'btn-success', 'mt-3', 'mr-2');
    buyButton.addEventListener('click', () => {
        var containerData = basket
        var serializedData = JSON.stringify(containerData);
        localStorage.setItem('containerData', serializedData);
        window.location.href = 'pay.html?';
        console.log('Buy button clicked!');
    });
    basketDiv.appendChild(buyButton);

    const clearButton = document.createElement('button');
    clearButton.innerHTML = 'Clear Basket';
    clearButton.classList.add('btn', 'btn-secondary', 'mt-3');
    clearButton.addEventListener('click', () => {
        basket.length = 0;
        displayBasket();


    });
    basketDiv.appendChild(clearButton);
}

function deleteItemFromBasket(index) {
    basket.splice(index, 1);
    displayBasket();
}
