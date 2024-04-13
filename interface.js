var samsumg = {
    name: "Galaxy 7",
    price: 19000,
    quantity: 1,
};
var totalPrice = function (productObj) {
    var price = productObj.price, quantity = productObj.quantity;
    return price * quantity;
};
var result1 = totalPrice(samsumg);
console.log(result1);
