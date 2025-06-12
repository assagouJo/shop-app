let count = 0;

export const createItemCard = (shoppingCarData) => {
        const card_container = document.getElementById('card_container');
        const items = shoppingCarData.forEach(item => {
        const itemCardContainer = document.createElement('div');
        itemCardContainer.id = 'itemCardContainer';
        const photo = document.createElement('img');
        photo.classList = 'details photo';
        const title = document.createElement('span');
        title.classList = 'details title';
        const checkout = document.createElement('button');
        checkout.classList = 'details checkout';
        const price = document.createElement('span');
        price.classList = 'details price';
        photo.src = 'images/peacelily.jpg';
        photo.alt = 'error to load picture';
        title.innerHTML = item.title;
        checkout.innerHTML = 'checkout';
        price.innerHTML = `$${item.price}`;

        checkout.addEventListener('click', () => handleCheckout(item, shoppingCarData));

        card_container.appendChild(itemCardContainer);
        itemCardContainer.append(photo,title,price,checkout);
    })
    return items;
}



export const handleCheckout = (item, shoppingCarData) => {
    const checkoutArea = document.getElementById('checkoutArea');
    
    const matchedItem = shoppingCarData.find(i => i.id === item.id);
    if (!matchedItem) return;
    
    let existingItemDiv = checkoutArea.querySelector(`.itemDiv[data-id="${item.id}"]`);


    if(existingItemDiv){
        const quantity = existingItemDiv.querySelector('.quantity');
        console.log(quantity)
        let currentQty = parseInt(quantity.innerHTML);
        quantity.innerHTML = currentQty + 1;
    }else{
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('itemDiv');
        itemDiv.setAttribute('data-id', item.id);
        
        const quantity = document.createElement('span');
        quantity.classList.add('checkoutDetails', 'quantity');
        quantity.innerHTML = 1;
        
        const title = document.createElement('span');
        title.classList.add('checkoutDetails', 'title');
        title.id = item.id;
        title.innerHTML = matchedItem.title;
        
        const price = document.createElement('span');
        price.classList.add('checkoutDetails', 'price');
        price.innerHTML = matchedItem.price;
        
        itemDiv.append(quantity, title, price);
        checkoutArea.appendChild(itemDiv);
        
    }
    updateTotalAmount();
}




export const updateTotalAmount = () => {     
        let total = 0;
        const checkoutItem = document.querySelectorAll('.itemDiv');

        checkoutItem.forEach(item => {
            let price = item.querySelector('.price');
            let quantity = item.querySelector('.quantity');

            const quantityResult = parseInt(price.innerHTML);
            const priceResult = parseFloat(quantity.innerHTML);

            if(!isNaN(quantityResult) && !isNaN(priceResult)){
                total += quantityResult * priceResult;            
            }

        const addTotal = document.getElementById('totalPrice');
        addTotal.innerHTML = `Total Amount: $${total.toFixed(2)}`;

    })

}


`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`