const burgerPrice = 5.99;
const pizzaPrice = 7.99;
const saladPrice = 4.99;
const drinkPrice =1.99;

function calculateOrder(){
    let total = 0;
    if (document.getElementById("burger").checked){
        total += burgerPrice;
    }

    if (document.getElementById("pizza").checked){
        total += burgerPrice;
    }

    if (document.getElementById("salad").checked){
        total += burgerPrice;
    }

    if (document.getElementById("drink").checked){
        total += burgerPrice;
    }

    document.getElementById("totalBeforeDiscount").innerText = `Total Before Discount ${total.toFixed(2)}`;

    let discountCode = document.getElementById("discountCode").value.trim()
    let finalTotal = total;
    let discountMessage = "No Discount Applied";

    if(discountCode === "SAVE10"){
        finalTotal = total * 0.9;
        discountMessage = "10% discount is Applied";
    }
    else if (discountCode === "SAVE20"){
        finalTotal = total * 0.8;
        discountMessage = "20% discount is Applied";
    }

    document.getElementById("finalTotal").innerText = `Final total: $${total.toFixed(2)}`
    document.getElementById("discountApplied").innerText = discountMessage;
}