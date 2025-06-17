function addProduct() {
  const name = prompt("Enter product name:");
  if (name) {
    const list = document.getElementById("productList");
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
    saveData();
  }
}

function saveData() {
  const listItems = document.querySelectorAll("#productList li");
  const products = [];
  listItems.forEach(item => products.push(item.textContent));
  localStorage.setItem("products", JSON.stringify(products));
}

function loadData() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const list = document.getElementById("productList");
  products.forEach(product => {
    const item = document.createElement("li");
    item.textContent = product;
    list.appendChild(item);
  });
}

window.onload = loadData;
