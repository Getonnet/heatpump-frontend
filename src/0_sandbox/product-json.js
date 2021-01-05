const products = {
  1: {
    id: 1,
    name: 'Walton AC25',
    quantity: '1',
    types: 'AC',
    capacity: 3,
    noise_level: 20,
    price: 30000,
    category: 'Luxery',
    brand: 'Konka',
    descriptions: null,
    photo: 'http://localhost:3000/uploads/product/walton-ac_1607086478.jpg',
  },
  2: {
    id: 2,
    name: 'Walton AC25',
    quantity: '30',
    types: 'AC',
    capacity: 3,
    noise_level: 20,
    price: 40000,
    category: 'Luxery',
    brand: 'Konka',
    descriptions: null,
    photo: 'http://localhost:3000/uploads/product/walton-ac_1607086478.jpg',
  },
}

let arr = Object.values(products).reduce(
  (a, b) => a + parseInt(b['quantity']),
  0
)

console.log(arr)
