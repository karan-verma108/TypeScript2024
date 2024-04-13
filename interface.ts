interface Product {
  name: string;
  price: number;
  quantity: number;
}

const samsumg: Product = {
  name: "Galaxy 7",
  price: 19000,
  quantity: 1,
};

const totalPrice = (productObj: Product): number => {
  const { price, quantity } = productObj;
  return price * quantity;
};

let result1 = totalPrice(samsumg);
console.log(result1);
