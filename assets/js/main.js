// Inject WhatsApp Floating Bubble
document.addEventListener('DOMContentLoaded', () => {
    const waButton = document.createElement('a');
    waButton.href = 'https://wa.me/918451850006';
    waButton.target = '_blank';
    waButton.className = 'fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgb(37,211,102,0.6)] flex items-center justify-center group';
    waButton.title = 'Chat with us on WhatsApp';

    waButton.innerHTML = `
        <svg class="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    `;
    document.body.appendChild(waButton);
});

const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('glass-header');
            navbar.classList.remove('bg-transparent', 'py-5');
        } else {
            navbar.classList.remove('glass-header');
            navbar.classList.add('bg-transparent', 'py-5');
        }
    });
}

// --- Mobile Menu Management ---
window.toggleSubMenu = function (id) {
    const subMenu = document.getElementById(id);
    if (subMenu) {
        subMenu.classList.toggle('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('mobile-menu');
    const navbarDiv = document.querySelector('#navbar > div');

    // 1. Inject menu dynamically if it is completely missing from HTML (like on product pages)
    if (!menu && navbarDiv) {
        menu = document.createElement('div');
        menu.id = 'mobile-menu';
        menu.className = 'md:hidden absolute top-full left-0 w-full bg-[#0a192f] border-t border-white/10 shadow-2xl';
        menu.style.display = 'none';
        menu.innerHTML = `
            <div class="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
                <a href="about.html" class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">About Us</a>
                <a href="products.html" class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Products</a>
                <div class="space-y-1">
                    <button onclick="toggleSubMenu('digital-sub-mobile')" class="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">
                        Digital Transformation
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div id="digital-sub-mobile" class="hidden pl-6 space-y-1 pb-2">
                        <a href="DigitalTransformation.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">All Services</a>
                        <a href="web-development.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">Web/App Development</a>
                        <a href="ringcrm-solutions.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">RingCRM Solutions</a>
                        <a href="whatsapp-marketing.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">WhatsApp Marketing</a>
                        <a href="cyber-security.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">Cyber Security</a>
                        <a href="automation-ai.html" class="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-md">Automation & AI</a>
                    </div>
                </div>
                <a href="blogs.html" class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Blogs</a>
                <a href="tracking.html" class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Shipment Tracking</a>
                <a href="contact.html" class="block w-full text-center mt-4 px-3 py-3 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-md">Contact Us</a>
            </div>
        `;
        navbarDiv.appendChild(menu);
    }

    // 2. Safely attach listener to the mobile menu button for all pages
    const btn = document.getElementById('mobile-menu-btn');
    if (btn && menu) {
        // Remove inline onclick from older pages if dynamically overwriting
        btn.removeAttribute('onclick');
        // Define unified toggle behaviour
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });
    }

    // 3. Close the menu automatically when any normal link is clicked
    if (menu) {
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.style.display = 'none';
            });
        });
    }
});

const categories = ["All", "Switches & Routers", "Wireless", "Firewall", "SMB", "Unified Communication", "Servers & Storage", "Power Solutions"];

const partners = [
    { name: "Cisco", src: "./assets/images/cisco-logo.webp", categories: ["Switches & Routers", "Wireless", "Firewall", "Unified Communication"] },
    { name: "Cisco Meraki", src: "./assets/images/Cisco-Meraki-logo.webp", categories: ["Switches & Routers", "Wireless"] },
    { name: "Juniper Networks", src: "./assets/images/juniper-logo.webp", categories: ["Switches & Routers"] },
    { name: "Huawei Technologies", src: "./assets/images/huawei-logo.webp", categories: ["Switches & Routers"] },
    { name: "Arista Networks", src: "./assets/images/Arista-Networks-logo.webp", categories: ["Switches & Routers"] },
    { name: "Extreme Networks", src: "./assets/images/Extreme-Networks-logo.webp", categories: ["Switches & Routers"] },
    { name: "Hewlett Packard Enterprise", src: "./assets/images/Hewlett-Packard-Enterprise-logo.webp", categories: ["Switches & Routers"] },
    { name: "Dell Technologies", src: "./assets/images/dell-logo.webp", categories: ["Switches & Routers", "Firewall", "Servers & Storage"] },
    { name: "MikroTik", src: "./assets/images/mikrotik-logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "TP-Link", src: "./assets/images/tp-link-logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "D-Link", src: "./assets/images/Dlink-logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "Aruba Networks", src: "./assets/images/arubanetworks-logo.webp", categories: ["Wireless"] },
    { name: "Ruckus Networks", src: "./assets/images/ruckusnetworks-logo.webp", categories: ["Wireless"] },
    { name: "Cambium Networks", src: "./assets/images/Cambium-Networks-logo.webp", categories: ["Wireless"] },
    { name: "Ubiquiti", src: "./assets/images/Ubiquiti-Logo.webp", categories: ["Wireless"] },
    { name: "Ruijie Networks", src: "./assets/images/Ruijie-Networks-logo.webp", categories: ["Wireless"] },
    { name: "Fortinet", src: "./assets/images/fortinet-logo.webp", categories: ["Firewall"] },
    { name: "Sophos", src: "./assets/images/Sophos-logo.webp", categories: ["Firewall"] },
    { name: "SONICWALL", src: "./assets/images/SONICWALL-logo.webp", categories: ["Firewall"] },
    { name: "Checkpoint", src: "./assets/images/Checkpoint-logo.webp", categories: ["Firewall"] },
    { name: "Netgear", src: "./assets/images/Netgear-logo.webp", categories: ["SMB"] },
    { name: "Avaya", src: "./assets/images/avaya-logo.webp", categories: ["Unified Communication"] },
    { name: "Yealink", src: "./assets/images/Yealink-logo.webp", categories: ["Unified Communication"] },
    { name: "Grandstream", src: "./assets/images/Grandstream-logo.webp", categories: ["Unified Communication"] },
    { name: "HP", src: "./assets/images/hp-logo.webp", categories: ["Servers & Storage"] },
    { name: "IBM", src: "./assets/images/IBM-logo.webp", categories: ["Servers & Storage"] },
    { name: "Inspur", src: "./assets/images/Inspur-logo.webp", categories: ["Servers & Storage"] },
    { name: "QNAP", src: "./assets/images/QNAP-LOGO.webp", categories: ["Servers & Storage"] },
    { name: "NVIDIA", src: "./assets/images/nvidia-logo.webp", categories: ["Servers & Storage"] },
    { name: "Seagate", src: "./assets/images/Seagate-logo.webp", categories: ["Servers & Storage"] },
    { name: "Schneider Electric", src: "./assets/images/Schneider-Electric-logo.webp", categories: ["Power Solutions"] },
    { name: "APC", src: "./assets/images/APC-Logo.webp", categories: ["Power Solutions"] },
    { name: "Brocade", src: "./assets/images/Brocade-logo.webp", categories: ["Servers & Storage"] },
    { name: "Synology", src: "./assets/images/Synology-logo.webp", categories: ["Servers & Storage"] },
    { name: "H3C", src: "./assets/images/H3C_logo.webp", categories: ["Switches & Routers"] },
    { name: "Allied Telesis", src: "./assets/images/AlliedTelesis-logo.webp", categories: ["Switches & Routers"] },
    { name: "Lenovo", src: "./assets/images/Lenovo-logo.webp", categories: ["Servers & Storage"] },
    { name: "Vertiv", src: "./assets/images/vertiv-logo.webp", categories: ["Power Solutions"] }
];

const filterContainer = document.getElementById('logo-filters');
const logoGrid = document.getElementById('logo-grid');
let activeCategory = "All";

function renderFilters() {
    filterContainer.innerHTML = '';
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category;
        btn.className = `px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeCategory === category
            ? "bg-blue-600 text-white shadow-md"
            : "bg-transparent text-slate-600 hover:text-blue-600 hover:bg-slate-100"
            }`;
        btn.onclick = () => {
            activeCategory = category;
            renderFilters();
            renderLogos();
        };
        filterContainer.appendChild(btn);
    });
}

function renderLogos() {
    logoGrid.innerHTML = '';
    
    // Logos that need extra scaling due to built-in padding or aspect ratio
    const scaleUpLogos = ["MikroTik", "TP-Link", "Aruba Networks", "Checkpoint", "Seagate", "Schneider Electric", "APC"];
    
    partners.forEach(partner => {
        const isActive = activeCategory === "All" || partner.categories.includes(activeCategory);

        const div = document.createElement('div');
        div.className = `w-[70px] h-[40px] sm:w-[85px] sm:h-[55px] lg:w-[95px] lg:h-[60px] flex items-center justify-center transition-all duration-300 transform ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
            }`;

        const isSmallLogo = scaleUpLogos.includes(partner.name);
        const baseScale = isSmallLogo ? "scale-[1.35]" : "scale-100";
        const hoverScale = isSmallLogo ? "hover:scale-[1.5]" : "hover:scale-110";

        const img = document.createElement('img');
        img.src = partner.src;
        img.alt = partner.name;
        img.loading = "lazy";
        img.className = `max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300 ${baseScale} ${isActive ? "grayscale-0 " + hoverScale : "grayscale"
            }`;

        div.appendChild(img);
        logoGrid.appendChild(div);
    });
}

renderFilters();
renderLogos();
