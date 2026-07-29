// assets/js/quote.js

function viewProduct(button, skipRedirect = false) {
    const card = button.closest('.product-card');
    const categoryHeader = document.querySelector('h1');
    const categoryName = categoryHeader ? categoryHeader.innerText : "Enterprise Hardware";

    const product = {
        id: card.querySelector('h3').innerText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
        title: card.querySelector('h3').innerText,
        brand: card.getAttribute('data-brand'),
        category: categoryName,
        description: card.querySelector('p').innerText,
        image: card.querySelector('img').src
    };

    // Save to browser memory
    localStorage.setItem('activeProduct', JSON.stringify(product));
    
    // Redirect to the universal product page
    if (!skipRedirect) {
        window.location.href = './product.html';
    }
}

function loadProductDetails() {
    const data = localStorage.getItem('activeProduct');
    if (!data) {
        window.location.href = './index.html'; 
        return;
    }

    const product = JSON.parse(data);

    const category = product.category || "Products";
    const brand = product.brand || "";
    
    // Generate safe category link
    const safeCategory = category.toLowerCase();
    const categoryLink = safeCategory.replace(/ & /g, '-').replace(/ /g, '-').replace('security-', '') + '.html';
    
    // Update Back Button
    const backBtnSpan = document.querySelector('main .mb-4 a span');
    if (backBtnSpan) backBtnSpan.innerText = `Back to ${category}`;
    

    
    // Update IDs
    const titleEl = document.getElementById('product-title');
    if (titleEl) titleEl.innerText = product.title || "Product Details";
    
    const subtitleEl = document.getElementById('product-subtitle');
    if (subtitleEl) subtitleEl.innerText = product.description || "";
    
    const tagsEl = document.getElementById('product-tags');
    if (tagsEl) tagsEl.innerText = `${brand}, ${category}`;
    
    const descEl = document.getElementById('product-description');
    if (descEl) descEl.innerText = product.description || "";
    
    const imageEl = document.getElementById('product-image');
    if (imageEl && product.image) imageEl.src = product.image;

    // Generate Specs
    const specsContainer = document.getElementById('product-specs');
    let specsHTML = '';

    if (product.category.includes('Firewall')) {
        specsHTML = generateSpecs(['Threat Protection: Industry Leading', 'Form Factor: Enterprise Appliance', 'VPN Support: IPsec & SSL', 'Management: Cloud & On-Premise']);
    } else if (product.category.includes('Switch')) {
        specsHTML = generateSpecs(['Ports: High-Density GbE', 'PoE Support: PoE/PoE+', 'Uplinks: 10G/25G/40G', 'Layer: L2/L3 Advanced']);
    } else if (product.category.includes('Router')) {
        specsHTML = generateSpecs(['Throughput: High-Speed Routing', 'WAN Ports: Multiple GE/SFP', 'Features: SD-WAN & Security', 'Form Factor: Rackmount']);
    } else if (product.category.includes('Access Point')) {
        specsHTML = generateSpecs(['Wi-Fi Standard: Wi-Fi 6 / Wi-Fi 7', 'Antenna: Advanced MU-MIMO', 'Throughput: Multi-Gigabit', 'Deployment: Indoor/Outdoor']);
    } else if (product.category.includes('Phone')) {
        specsHTML = generateSpecs(['Lines: Multi-line Support', 'Display: High-Res Color LCD', 'Audio: HD Voice & Noise Cancellation', 'Connectivity: Gigabit Ethernet']);
    } else if (product.category.includes('Server')) {
        specsHTML = generateSpecs(['Processor: High-Core CPU', 'Memory: Scalable DDR4/DDR5 ECC', 'Storage: High-Speed NVMe/SAS', 'Form Factor: 1U/2U Rack']);
    } else if (product.category.includes('Transceiver')) {
        specsHTML = generateSpecs(['Data Rate: 1G to 100G+', 'Form Factor: SFP/SFP+/QSFP', 'Wavelength: Optimized for SMF/MMF', 'Compatibility: MSA Compliant']);
    } else {
        specsHTML = generateSpecs(['Condition: Brand New / Certified', 'Warranty: 1 Year Limited', 'Support: Enterprise Tech Support', 'Shipping: Global Secure Delivery']);
    }

    if(specsContainer) specsContainer.innerHTML = specsHTML;

    // Bind Add to Quote Button
    const quoteBtn = document.getElementById('add-to-quote-btn');
    if(quoteBtn) {
        quoteBtn.onclick = function() { addToCart(product, quoteBtn); };
    }
}

function generateSpecs(specsArray) {
    return specsArray.map(spec => {
        const parts = spec.split(':');
        return `<div class="flex items-center text-slate-400 text-sm">
                    <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    <span class="font-semibold text-slate-200 mr-2">${parts[0]}: ${parts[1] || ''}</span>
                </div>`;
    }).join('');
}

function addToQuoteFromCard(button) {
    const card = button.closest('.product-card');
    const categoryHeader = document.querySelector('h1');
    const categoryName = categoryHeader ? categoryHeader.innerText : "Enterprise Hardware";

    const product = {
        id: card.querySelector('h3').innerText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
        title: card.querySelector('h3').innerText,
        brand: card.getAttribute('data-brand'),
        category: categoryName,
        description: card.querySelector('p').innerText,
        image: card.querySelector('img').src
    };

    addToCart(product, button);
}

function addToCart(product, button) {
    let cart = JSON.parse(localStorage.getItem('quoteCart')) || [];
    const exists = cart.find(p => p.id === product.id);
    
    if (!exists) {
        cart.push(product);
        localStorage.setItem('quoteCart', JSON.stringify(cart));
        
        // Visual feedback on the button
        if(button && !button.dataset.adding) {
            button.dataset.adding = "true";
            const originalText = button.innerHTML;
            button.innerHTML = `<span>✓ Added to Quote</span>`;
            button.classList.add('bg-emerald-600');
            button.classList.remove('bg-blue-600');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('bg-emerald-600');
                button.classList.add('bg-blue-600');
                delete button.dataset.adding;
            }, 2000);
        }
        
        updateCartBadge();
    } else {
        // Even if exists, show visual feedback but don't add
        if(button && !button.dataset.adding) {
            button.dataset.adding = "true";
            const originalText = button.innerHTML;
            button.innerHTML = `<span>In Quote List</span>`;
            button.classList.add('bg-slate-600');
            button.classList.remove('bg-blue-600');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('bg-slate-600');
                button.classList.add('bg-blue-600');
                delete button.dataset.adding;
            }, 2000);
        }
    }
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('quoteCart')) || [];
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    });
}

// Run badge update on every page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
