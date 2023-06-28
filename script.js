// Array para almacenar los elementos de la lista
let itemList = [];

// Función para agregar un nuevo elemento a la lista
function addItem() {
  const newItemInput = document.getElementById('new-item');
  const newPriceInput = document.getElementById('new-price');
  const newMarketInput = document.getElementById('new-market');
  const newItem = newItemInput.value;
  const newPrice = newPriceInput.value;
  const newMarket = newMarketInput.value;

  if (newItem !== '' && newPrice !== '' && newMarket !== '') {
    const newItemObject = {
      name: newItem,
      price: newPrice,
      market: newMarket
    };

    itemList.push(newItemObject);

    const itemListElement = document.getElementById('item-list');

    const newItemElement = document.createElement('div');
    newItemElement.classList.add('item');
    newItemElement.innerHTML = `
      <span>Articulo: ${newItem}</span>
      <div class="item-details">
        <span>Precio: ${newPrice}</span>
        <br>
        <span>Mercado: ${newMarket}</span>
      </div>
    `;

    itemListElement.appendChild(newItemElement);

    newItemInput.value = '';
    newPriceInput.value = '';
    newMarketInput.value = '';
  }
}

// Función para compartir la lista por WhatsApp
function shareList() {
  const sharedText = 'Mi Lista de Compras:\n\n';
  const itemsText = itemList.map(item => {
    return `${item.name}\nPrecio: ${item.price}\nMercado: ${item.market}\n\n`;
  }).join('');
  const sharedMessage = encodeURIComponent(sharedText + itemsText);
  const shareURL = `https://web.whatsapp.com/send?text=${sharedMessage}`;

  window.open(shareURL, '_blank');
}

// Función para inicializar la aplicación
function initApp() {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', addItem);

  const shareButton = document.getElementById('share-button');
  shareButton.addEventListener('click', shareList);
}

// Inicializar la aplicación al cargar la página
window.addEventListener('load', initApp);
