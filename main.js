let products = [
  { id: 0, name: 'papa', price: 80, category: 'verduras', img: 'https://www.clarin.com/img/2014/09/22/SJelSL42Qg_1256x620.jpg' },
  { id: 2, name: 'cebolla', price: 100, category: 'verduras', img: 'http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/55.jpg' },
  { id: 3, name: 'tomate', price: 160, category: 'frutas', img: 'https://www.lovemysalad.com/sites/default/files/styles/image_415x281/public/tomates_-_vladimir_morozov.jpg?itok=gU1-XJyE' },
];

const productsCopy = [...products];
let cart = [];

function setCategoryFilter(category) {
  products = [...productsCopy];
  if (category == 'verduras' || category == 'frutas') {
    products = products.filter((item) => item.category == category);
  }
  renderProducts();
}

function renderProducts() {
  let html = '';
  for (let i = 0; i < products.length; i++) {
    html =
      html +
      `
    <div onclick="addToCart(${products[i].id});" style="border: 1px solid green;margin: 10px;">
      <p>id: ${products[i].id}</p>
      <p>nombre: ${products[i].name}</p>
      <p>precio: ${products[i].price}</p>
      <p>categoria: ${products[i].category}</p>
      <p>
        <img style="width:200px;height:200px;" src="${products[i].img}" />
      </p>
      </div>
    `;
  }
  document.getElementById('div-products').innerHTML = html;
}

function renderCart() {
  if (cart.length == 0) {
    document.getElementById('div-cart').innerHTML = '<h3>NO HAY NADA EN EL CARRO</h3>';
  } else {
    let html = '';
    for (let i = 0; i < cart.length; i++) {
      html =
        html +
        `
      <div style="border: 1px solid green;margin: 10px;">
      <p>id: ${cart[i].id}</p>
      <p>nombre: ${cart[i].name}</p>
      <p>precio: ${cart[i].price}</p>
      <p>categoria: ${cart[i].category}</p>
      <p>
      <img style="width:200px;height:200px;" src="${cart[i].img}" />
      </p>
      <span style="cursor:pointer;" onclick="removeFromCart(${i});">🛒</span>
      </div>
      `;
    }
    document.getElementById('div-cart').innerHTML = html;
  }
}

function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
  cart.push(foundProduct);
  renderCart();
}

function removeFromCart(id) {
  cart.splice(id, 1);
  renderCart();
}

renderProducts();
