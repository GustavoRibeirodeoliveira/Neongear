// ===============================
// PRODUTOS
// ===============================
const products = [
  {
    id: 1,
    name: "Mouse Gamer Fortrek BlackFire RGB",
    price: 69.99,
    category: "mouse",
    image: "mouse.WEBP"
  },
  {
    id: 2,
    name: "Teclado Magnético Gamer Redragon Kumara Pro",
    price: 219.99,
    category: "teclado",
    image: "tecladomeca.PNG"
  },
  {
    id: 3,
    name: "Mousepad Gamer Dukie RGB",
    price: 69.90,
    category: "mousepad",
    image: "mousepad.PNG"
  },
  {
    id: 4,
    name: "Headset Gamer Sem Fio 7.1 Redragon Zeus Pro H510 Wireless",
    price: 199.9,
    category: "headset",
    image: "headset1.PNG"
  },
  {
    id: 5,
    name: "Controle DualSense Edição Limitada Astro Bot",
    price: 599.99,
    category: "controle",
    image: "controleps5.PNG"
  },
  {
    id: 6,
    name: "Mouse Gamer Razer DeathAdder Essential",
    price: 189.99,
    category: "mouse",
    image: "mousebranco.webp"
  },
  {
    id: 7,
    name: "Teclado Gamer Mecânico CORSAIR K65",
    price: 545.90,
    category: "teclado",
    image: "teclabranco.webp"
  },
  {
    id: 8,
    name: "Placa-Mãe MSI MPG B550 Gaming Plus, AMD AM4",
    price: 939.99,
    category: "placa-mãe",
    image: "placamãe.jpg"
  },
  {
    id: 9,
    name: "SSD Kingston NV3, 1 TB, M.2 2280, PCIe 4.0 x4, NVMe",
    price: 999.99,
    category: "SSD",
    image: "ssd.jpg"
  },
  {
    id: 10,
    name: "Headset JBL Quantum 910 Gamer Wireless RGB Hi-Res",
    price: 1635.83,
    category: "headset",
    image: "fone.webp"
  },
  {
    id: 11,
    name: "Controle Wireless 8BitDo Ultimate 2 ",
    price: 369.00,
    category: "controle",
    image: "comtrole.webp"  
  },
  {id:12,
    name:"Placa-Mãe Gigabyte B550M Aorus Elite ",
    price:739.99,
    category:"placa-mãe",
    image:"placa.webp"

  },
  {id:13,
  name:"SSD Adata Legend 860, 1TB, M.2 2280, PCIe Gen 4x4",
  price:849.99,
  category:"SSD",
  image:"sdd.webp"

},
{
  id:14,
  name:"Teclado Mecânico Gamer Rise Mode GM1 Black",
  price:139.90,
  category:"teclado",
  image:"tecla.webp"
},
{
  id:15,
  name:"Mouse Gamer GXTrust 922W Ybar RGB, 6 Botões",
  price:98.99,
  category:"mouse",
  image:"mose.webp"

},
{
  id:16,
  name:"Mousepad Gamer GXTrust GXT 764 Glide-Flex",
  price:155.90,
  category:"mousepad",
  image:"mousepade.webp"
},
{
id:17,
name:"Placa Mãe ASUS B650M-AYW Wi-Fi, AM5, mATX, DDR5",
price:1099.99,
category:"placa-mãe",
image:"plac.webp"
},

{
  id:18,
  name:"Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo)",
  price:1249.00,
  category:"Processador",
  image:"processador.webp"
},
{
  id:19,
  name:"Processador AMD Ryzen 5 7600X, 5.3GHz Max Turbo, Cache 38MB",
  price:1269.99,
  category:'Processador',
  image:"procesador.webp"
  

 
},
{id:20,
  name:"Processador Intel Core i7-12700F, 2.1GHz (4.9GHz Max Turbo)",
  price: 1399.99,
  category:'Processador',
  image:"intel.webp"
},
{
  id:21,
  name:"Monitor Gamer ASUS TUF 27",
  price:1299.99,
  category:'Monitor',
  image:"monitor.webp"
},
{
  id:22,
  name:"Monitor Gamer Dell Alienware 27, QHD, 180Hz",
  price:2399.90,
  category:'Monitor',
  image:"moni.jpg"
}
];


// ===============================
// FUNÇÃO TOAST
// ===============================
function showToast(message, icon = "✅") {
  // Remove toast anterior
  const old = document.querySelector('.toast');
  if (old) old.remove();

  // Cria toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #47757e 0%, #2694d4 100%);
    color: white;
    padding: 20px 30px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(223, 220, 43, 0.4);
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 16px;
    font-weight: 600;
    z-index: 99999;
  `;
  
  toast.innerHTML = `
    <span style="font-size: 24px;">${icon}</span>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Animação de entrada
  toast.style.transform = 'translateX(400px)';
  toast.style.opacity = '0';
  
  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease-out';
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  // Remove após 3 segundos
  setTimeout(() => {
    toast.style.transform = 'translateX(400px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===============================
// ADICIONAR AO CARRINHO
// ===============================
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(p => p.id === product.id);
  
  if (item) {
    item.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast("Produto adicionado ao carrinho!", "🎉");
}

// ===============================
// RENDER PRODUTOS
// ===============================
function renderProducts(category = "all") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  currentCategory = category;
  
  products.forEach(product => {
    if (category !== "all" && product.category !== category) return;
    
    const card = document.createElement("div");
    card.className = "product-card";
    
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="cursor: pointer;">
      <h3 style="cursor: pointer;">${product.name}</h3>
      <p class="price">R$ ${product.price.toFixed(2)}</p>
      <button class="btn primary">Adicionar ao carrinho</button>
    `;
    
    const imgAndTitle = card.querySelectorAll("img, h3");
    imgAndTitle.forEach(el => {
      el.addEventListener("click", () => {
        window.location.href = `produto.html?id=${product.id}`;
      });
    });
    
    card.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product);
    });
    
    grid.appendChild(card);
  });
  
  // Aplica busca se houver texto no input
  const searchQuery = searchInput ? searchInput.value : '';
  if (searchQuery) {
    searchProducts(searchQuery);
  }
}
// ===============================
// BARRA DE BUSCA
// ===============================
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
let currentCategory = 'all';

// Função de busca
function searchProducts(query) {
  const grid = document.getElementById("productsGrid");
  const cards = grid.querySelectorAll('.product-card');
  let visibleCount = 0;
  
  query = query.toLowerCase().trim();
  
  cards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    const matchesSearch = productName.includes(query);
    
    if (matchesSearch || query === '') {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
  
  // Atualiza mensagem de resultados
  if (query === '') {
    searchResults.textContent = '';
    searchResults.classList.remove('no-results');
  } else if (visibleCount === 0) {
    searchResults.textContent = `Nenhum produto encontrado para "${query}"`;
    searchResults.classList.add('no-results');
  } else {
    searchResults.textContent = `${visibleCount} produto${visibleCount > 1 ? 's' : ''} encontrado${visibleCount > 1 ? 's' : ''}`;
    searchResults.classList.remove('no-results');
  }
  
  // Mostra/esconde botão de limpar
  clearSearch.style.display = query === '' ? 'none' : 'flex';
}

// Event listener do input
searchInput.addEventListener('input', (e) => {
  searchProducts(e.target.value);
});

// Botão de limpar busca
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchProducts('');
  searchInput.focus();
});

// Limpar busca ao trocar de categoria
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    searchInput.value = '';
    searchResults.textContent = '';
    searchResults.classList.remove('no-results');
    clearSearch.style.display = 'none';
    
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts(btn.dataset.cat);
  });
});
 
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.cat);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});