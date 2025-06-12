import { createItemCard } from "./helpers/helpersFunctions.js";


const url = `jsonData/fakeShoppingCarData.json`;


const displayCard = async () => {
    try {
        const response = await fetch(url);
        if(response.ok){
            const jsonResponse = await response.json();
            if(jsonResponse){
                createItemCard(jsonResponse)
            }
        }
    } catch (error) {
        console.log(error);
    }
}


// checkout button
const openCheckout = document.getElementById('addToCard');
const checkoutCard = document.getElementById('checkoutCard');
openCheckout.addEventListener('click', ()=> {
    if(checkoutCard.style.display === 'none'){
        checkoutCard.style.display = 'block';
    }else{
        checkoutCard.style.display = 'none';
    }

})


displayCard()