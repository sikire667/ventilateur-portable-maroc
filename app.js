const WHATSAPP_NUMBER = "212600000000";

const translations = {
  fr: {
    languageButton: "العربية",
    navProducts: "Produits",
    navBenefits: "Avantages",
    navOrder: "Commande",
    headerCta: "Commander",
    heroEyebrow: "Offre speciale ete",
    heroTitle: "Reste frais partout avec nos ventilateurs portables.",
    heroText:
      "Mini ventilateur rechargeable, ventilateur de cou, modele de bureau silencieux et packs economie. Commande rapide, confirmation par telephone et livraison a domicile.",
    heroPrimary: "Je veux commander",
    heroSecondary: "Voir les modeles",
    trustPayment: "Paiement a la reception",
    trustDelivery: "Livraison 24-72h selon la ville",
    trustPrice: "Prix a partir de 89 DH",
    promoDiscount: "-15% sur le deuxieme produit",
    promoPack: "Pack famille disponible",
    promoSupport: "Support WhatsApp avant commande",
    productsEyebrow: "Multi produits",
    productsTitle: "Choisis le ventilateur adapte a ton besoin.",
    productsText: "Des produits legers, faciles a livrer et simples a vendre pendant les periodes de chaleur.",
    benefitsEyebrow: "Avantages FreshFan",
    benefitsTitle: "Une sensation de fraicheur qui rassure tout de suite.",
    benefitsText:
      "Les couleurs douces, l'air frais et le format portable donnent au client une impression de calme, de confiance et de confort avant meme de commander.",
    benefitOneTitle: "Confort rapide",
    benefitOneText: "Un souffle frais aide a se sentir mieux quand la chaleur fatigue.",
    benefitTwoTitle: "Facile a transporter",
    benefitTwoText: "Compact pour le bureau, la chambre, le sac ou les sorties.",
    benefitThreeTitle: "Rechargeable et economique",
    benefitThreeText: "Pratique au quotidien, sans installation et sans stress.",
    benefitCta: "Commander maintenant",
    orderEyebrow: "Commande",
    orderTitle: "Remplis le formulaire, on te confirme par telephone.",
    orderText:
      "Choisis un produit, ajoute tes informations et envoie la demande. Le message WhatsApp sera prepare automatiquement.",
    orderPointOne: "Nom et prenom pour confirmer la commande",
    orderPointTwo: "Numero de telephone pour l'appel de confirmation",
    orderPointThree: "Ville pour verifier le delai de livraison",
    formLastName: "Nom",
    formFirstName: "Prenom",
    formPhone: "Numero de telephone",
    formCity: "Ville",
    formProduct: "Produit souhaite",
    formSubmit: "Envoyer ma commande WhatsApp",
    formNote: "Change le numero WhatsApp dans app.js avant de lancer les ventes.",
    lastNamePlaceholder: "Ex: El Amrani",
    firstNamePlaceholder: "Ex: Yassine",
    phonePlaceholder: "Ex: 06 12 34 56 78",
    cityPlaceholder: "Ex: Casablanca",
    chooseModel: "Choisir ce modele",
    orderMessageTitle: "Bonjour FreshFan, je veux commander.",
    lastNameField: "Nom",
    firstNameField: "Prenom",
    phoneField: "Telephone",
    cityField: "Ville",
    productField: "Produit",
    priceField: "Prix",
  },
  ar: {
    languageButton: "Français",
    navProducts: "المنتجات",
    navBenefits: "المميزات",
    navOrder: "الطلب",
    headerCta: "اطلب الآن",
    heroEyebrow: "عرض خاص لفصل الصيف",
    heroTitle: "ابقَ منتعشا في كل مكان مع مراوح FreshFan المحمولة.",
    heroText:
      "مراوح صغيرة قابلة للشحن، مراوح للرقبة، موديلات للمكتب وباقات اقتصادية. طلب سريع، تأكيد عبر الهاتف وتوصيل حتى باب المنزل.",
    heroPrimary: "أريد الطلب",
    heroSecondary: "شاهد الموديلات",
    trustPayment: "الدفع عند الاستلام",
    trustDelivery: "توصيل خلال 24-72 ساعة حسب المدينة",
    trustPrice: "الأسعار ابتداء من 89 درهم",
    promoDiscount: "خصم 15% على المنتج الثاني",
    promoPack: "باقة العائلة متوفرة",
    promoSupport: "دعم عبر واتساب قبل الطلب",
    productsEyebrow: "عدة منتجات",
    productsTitle: "اختر المروحة المناسبة لاحتياجك.",
    productsText: "منتجات خفيفة، سهلة التوصيل ومناسبة جدا لفترة الحرارة.",
    benefitsEyebrow: "مميزات FreshFan",
    benefitsTitle: "إحساس بالانتعاش يريح العميل من أول لحظة.",
    benefitsText:
      "الألوان الهادئة، الهواء المنعش والحجم المحمول يعطون إحساسا بالراحة والثقة قبل اتخاذ قرار الشراء.",
    benefitOneTitle: "راحة سريعة",
    benefitOneText: "نسيم منعش يساعدك على الشعور براحة أكبر عندما تصبح الحرارة متعبة.",
    benefitTwoTitle: "سهل الحمل",
    benefitTwoText: "حجم عملي للمكتب، الغرفة، الحقيبة أو الخروج.",
    benefitThreeTitle: "قابل للشحن واقتصادي",
    benefitThreeText: "حل عملي للاستعمال اليومي بدون تركيب وبدون تعقيد.",
    benefitCta: "اطلب الآن",
    orderEyebrow: "الطلب",
    orderTitle: "املأ الاستمارة وسنتصل بك لتأكيد الطلب.",
    orderText: "اختر المنتج، أضف معلوماتك وأرسل الطلب. سيتم تجهيز رسالة واتساب تلقائيا.",
    orderPointOne: "الاسم والنسب لتأكيد الطلب",
    orderPointTwo: "رقم الهاتف للتواصل وتأكيد الطلب",
    orderPointThree: "المدينة لمعرفة مدة التوصيل",
    formLastName: "النسب",
    formFirstName: "الاسم",
    formPhone: "رقم الهاتف",
    formCity: "المدينة",
    formProduct: "المنتج المطلوب",
    formSubmit: "إرسال الطلب عبر واتساب",
    formNote: "غيّر رقم واتساب في app.js قبل إطلاق المبيعات.",
    lastNamePlaceholder: "مثال: العمراني",
    firstNamePlaceholder: "مثال: ياسين",
    phonePlaceholder: "مثال: 06 12 34 56 78",
    cityPlaceholder: "مثال: الدار البيضاء",
    chooseModel: "اختر هذا الموديل",
    orderMessageTitle: "السلام عليكم FreshFan، أريد طلب هذا المنتج.",
    lastNameField: "النسب",
    firstNameField: "الاسم",
    phoneField: "الهاتف",
    cityField: "المدينة",
    productField: "المنتج",
    priceField: "الثمن",
  },
};

const products = [
  {
    id: "mini-usb",
    price: 89,
    oldPrice: 119,
    imagePosition: "15% center",
    fr: {
      name: "Mini ventilateur USB",
      badge: "Best seller",
      description: "Petit, rechargeable et facile a transporter dans un sac.",
    },
    ar: {
      name: "مروحة USB صغيرة",
      badge: "الأكثر طلبا",
      description: "صغيرة، قابلة للشحن وسهلة الحمل داخل الحقيبة.",
    },
  },
  {
    id: "neck-cool",
    price: 149,
    oldPrice: 189,
    imagePosition: "42% center",
    fr: {
      name: "Ventilateur de cou",
      badge: "Mains libres",
      description: "Ideal pour marcher, travailler dehors ou voyager en ete.",
    },
    ar: {
      name: "مروحة للرقبة",
      badge: "بدون استعمال اليدين",
      description: "مناسبة للمشي، العمل خارجا أو السفر في الصيف.",
    },
  },
  {
    id: "desk-quiet",
    price: 129,
    oldPrice: 169,
    imagePosition: "68% center",
    fr: {
      name: "Ventilateur bureau silencieux",
      badge: "Silencieux",
      description: "Compact pour bureau, chambre, comptoir ou table de nuit.",
    },
    ar: {
      name: "مروحة مكتب هادئة",
      badge: "هادئة",
      description: "مناسبة للمكتب، الغرفة، الطاولة أو بجانب السرير.",
    },
  },
  {
    id: "pack-family",
    price: 299,
    oldPrice: 397,
    imagePosition: "55% center",
    fr: {
      name: "Pack Famille Fraicheur",
      badge: "Pack economie",
      description: "Trois ventilateurs pour maison, sorties et voiture.",
    },
    ar: {
      name: "باقة العائلة للانتعاش",
      badge: "باقة اقتصادية",
      description: "ثلاث مراوح للمنزل، الخروج والسيارة.",
    },
  },
];

let currentLanguage = localStorage.getItem("freshfan-language") || "fr";

const productGrid = document.querySelector("#product-grid");
const productSelect = document.querySelector("#selected-product");
const orderForm = document.querySelector("#order-form");
const languageToggle = document.querySelector("#language-toggle");

function money(value) {
  return `${value.toLocaleString("fr-FR")} DH`;
}

function translatePage() {
  const dictionary = translations[currentLanguage];
  const isArabic = currentLanguage === "ar";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("is-arabic", isArabic);
  languageToggle.textContent = dictionary.languageButton;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  renderProducts();
}

function renderProducts() {
  const dictionary = translations[currentLanguage];

  productGrid.innerHTML = products
    .map((product) => {
      const content = product[currentLanguage];
      return `
        <article class="product-card">
          <div class="product-visual">
            <img src="assets/fan-products.png" alt="${content.name}" style="object-position: ${product.imagePosition}" />
            <span class="badge">${content.badge}</span>
          </div>
          <div class="product-body">
            <h3>${content.name}</h3>
            <p>${content.description}</p>
            <div class="price-row">
              <span class="price">${money(product.price)}</span>
              <span class="old-price">${money(product.oldPrice)}</span>
            </div>
            <a class="product-cta" href="#commande" data-choose="${product.id}">${dictionary.chooseModel}</a>
          </div>
        </article>
      `;
    })
    .join("");

  productSelect.innerHTML = products
    .map((product) => {
      const content = product[currentLanguage];
      return `<option value="${product.id}">${content.name} - ${money(product.price)}</option>`;
    })
    .join("");
}

function sendOrder(event) {
  event.preventDefault();

  const dictionary = translations[currentLanguage];
  const data = new FormData(orderForm);
  const selectedProduct = products.find((item) => item.id === data.get("product"));
  const productName = selectedProduct ? selectedProduct[currentLanguage].name : data.get("product");
  const price = selectedProduct ? money(selectedProduct.price) : "A confirmer";

  const message = [
    dictionary.orderMessageTitle,
    `${dictionary.lastNameField}: ${data.get("lastName")}`,
    `${dictionary.firstNameField}: ${data.get("firstName")}`,
    `${dictionary.phoneField}: ${data.get("phone")}`,
    `${dictionary.cityField}: ${data.get("city")}`,
    `${dictionary.productField}: ${productName}`,
    `${dictionary.priceField}: ${price}`,
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

document.addEventListener("click", (event) => {
  const chooseButton = event.target.closest("[data-choose]");
  if (!chooseButton) return;

  productSelect.value = chooseButton.dataset.choose;
});

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "ar" : "fr";
  localStorage.setItem("freshfan-language", currentLanguage);
  translatePage();
});

orderForm.addEventListener("submit", sendOrder);
translatePage();
