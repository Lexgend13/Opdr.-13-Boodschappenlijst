const Price          = document.getElementsByClassName("productPrice")
const Quantity       = document.getElementsByClassName("productQuantity")
const SubtotalPrice  = document.getElementsByClassName("productTotalCost")
const TotalPrice     = document.getElementById("totalCost")
const GroceriesTable = document.getElementById("GroceriesTable");

console.log(Price)
console.log(Quantity)
console.log(SubtotalPrice)
console.log(TotalPrice)


function calculateTotal () {
    let Sum = 0;
    console.log('aantal producten is gewijzigd')
    for (let i = 0; i < SubtotalPrice.length; i++) {
        SubtotalPrice[i].innerHTML = (parseInt(Quantity[i].value) * parseFloat(Price[i].innerHTML)).toFixed(2)
        Sum += parseInt(Quantity[i].value) * parseFloat(Price[i].innerHTML)
    }
    TotalPrice.innerHTML = (parseFloat(Sum)).toFixed(2)
}

calculateTotal();
GroceriesTable.addEventListener("change", calculateTotal);

