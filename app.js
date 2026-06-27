const WHATSAPP_NUMBER = "212600000000";

const products = [
  {
    id: "mini-usb",
    name: "Mini ventilateur USB",
    badge: "Best seller",
    description: "Petit, rechargeable et facile a transporter dans un sac.",
    price: 89,
    oldPrice: 119,
    imagePosition: "15% center",
  },
  {
    id: "neck-cool",
    name: "Ventilateur de cou",
    badge: "Mains libres",
    description: "Ideal pour marcher, travailler dehors ou voyager en ete.",
    price: 149,
    oldPrice: 189,
    imagePosition: "42% center",
  },
  {
    id: "desk-quiet",
    name: "Ventilateur bureau silencieux",
    badge: "Silencieux",
    description: "Compact pour bureau, chambre, comptoir ou table de nuit.",
    price: 129,
    oldPrice: 169,
    imagePosition: "68% center",
  },
  {
    id: "pack-family",
    name: "Pack Famille Fraicheur",
    badge: "Pack economie",
    description: "Trois ventilateurs pour maison, sorties et voiture.",
    price: 299,
    oldPrice: 397,
    imagePosition: "55% center",
  },
];

const productGrid = document.querySelector("#product-grid");
const productSelect = document.querySelector("#selected-product");
const orderForm = document.querySelector("#order-form");

function money(value) {
  return `${value.toLocaleString("fr-FR")} DH`;
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual">
            <img src="assets/fan-products.png" alt="${product.name}" style="object-position: ${product.imagePosition}" />
            <span class="badge">${product.badge}</span>
          </div>
          <div class="product-body">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-row">
              <span class="price">${money(product.price)}</span>
              <span class="old-price">${money(product.oldPrice)}</span>
            </div>
            <a class="product-cta" href="#commande" data-choose="${product.id}">Choisir ce modele</a>
          </div>
        </article>
      `
    )
    .join("");

  productSelect.innerHTML = products
    .map((product) => `<option value="${product.name}">${product.name} - ${money(product.price)}</option>`)
    .join("");
}

function sendOrder(event) {
  event.preventDefault();

  const data = new FormData(orderForm);
  const selectedProduct = data.get("product");
  const product = products.find((item) => item.name === selectedProduct);
  const price = product ? money(product.price) : "A confirmer";

  const message = [
    "Bonjour FreshFan, je veux commander.",
    `Nom: ${data.get("lastName")}`,
    `Prenom: ${data.get("firstName")}`,
    `Telephone: ${data.get("phone")}`,
    `Ville: ${data.get("city")}`,
    `Produit: ${selectedProduct}`,
    `Prix: ${price}`,
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

document.addEventListener("click", (event) => {
  const chooseButton = event.target.closest("[data-choose]");
  if (!chooseButton) return;

  const product = products.find((item) => item.id === chooseButton.dataset.choose);
  if (product) {
    productSelect.value = product.name;
  }
});

renderProducts();
orderForm.addEventListener("submit", sendOrder);
