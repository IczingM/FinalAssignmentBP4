// Question #1: Inventory Management

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory.find(item => item.name === 'Apple').quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });

let totalValue = 0;
for (let item of inventory) {
  totalValue += item.price * item.quantity;
}

console.log(`Total inventory value: ${totalValue} baht`);