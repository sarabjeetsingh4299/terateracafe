// Global variables
let cart = [];
let filteredMenu = [];
let deferredPrompt;
let currentServiceType = window.currentServiceType || null;

// DOM Elements
let serviceSelection, mainContent, serviceIndicator, serviceTypeText;
let navToggle, navMenu, menuGrid, menuSearch, filterBtns, orderModal, cartItems, orderTotal, installBtn;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    serviceSelection = document.getElementById('service-selection');
    mainContent = document.getElementById('main-content');
    serviceIndicator = document.getElementById('service-indicator');
    serviceTypeText = document.getElementById('service-type-text');
    
    navToggle = document.getElementById('nav-toggle');
    navMenu = document.getElementById('nav-menu');
    menuGrid = document.getElementById('menu-grid');
    menuSearch = document.getElementById('menu-search');
    filterBtns = document.querySelectorAll('.filter-btn');
    orderModal = document.getElementById('order-modal');
    cartItems = document.getElementById('cart-items');
    orderTotal = document.getElementById('order-total');
    installBtn = document.getElementById('install-btn');
    
    // Initialize navigation immediately
    initializeNavigation();
    
    // Initialize filtered menu
    if (typeof menuData !== 'undefined') {
        filteredMenu = [...menuData];
    }
});

// Make initializeApp globally available
window.initializeApp = function() {
    // Update service indicator if service is selected
    if (window.currentServiceType) {
        currentServiceType = window.currentServiceType;
        updateServiceIndicator();
    }
    
    // Initialize components
    initializeSearch();
    initializeFilters();
    
    // Render menu
    if (menuGrid && filteredMenu.length > 0) {
        renderMenu();
    }
};

function updateServiceIndicator() {
    if (serviceIndicator && serviceTypeText && currentServiceType) {
        serviceTypeText.textContent = currentServiceType === 'dine-in' ? 'Dine-In' : 'Delivery';
        serviceIndicator.classList.add('show');
    }
}

// Get FontAwesome icon for menu items based on category and name
function getMenuItemIcon(item) {
    const name = item.name.toLowerCase();
    const category = item.category;
    
    // Special case for Cold Coffee - use image instead of icon
    if (name.includes('cold coffee')) {
        return 'image';
    }
    
    // Specific item icons
    if (name.includes('coffee')) return 'fas fa-coffee';
    if (name.includes('tea')) return 'fas fa-mug-hot';
    if (name.includes('shake') || name.includes('chocolate')) return 'fas fa-glass-whiskey';
    if (name.includes('mojito') || name.includes('soda') || name.includes('apple')) return 'fas fa-cocktail';
    if (name.includes('pasta')) return 'fas fa-utensils';
    if (name.includes('wrap') || name.includes('roll')) return 'fas fa-bread-slice';
    if (name.includes('kebab') || name.includes('falafel')) return 'fas fa-drumstick-bite';
    if (name.includes('waffle')) return 'fas fa-cookie-bite';
    if (name.includes('sandwich')) return 'fas fa-hamburger';
    if (name.includes('maggi') || name.includes('noodle')) return 'fas fa-utensils';
    if (name.includes('fries')) return 'fas fa-leaf';
    
    // Category-based fallback icons
    switch (category) {
        case 'cold-beverages':
            return 'fas fa-glass-water';
        case 'hot-beverages':
            return 'fas fa-mug-hot';
        case 'pasta':
            return 'fas fa-utensils';
        case 'wraps':
            return 'fas fa-bread-slice';
        case 'kebab':
            return 'fas fa-drumstick-bite';
        case 'waffle':
            return 'fas fa-cookie-bite';
        case 'sandwich':
            return 'fas fa-hamburger';
        case 'maggi':
            return 'fas fa-utensils';
        case 'fries':
            return 'fas fa-leaf';
        default:
            return 'fas fa-utensils';
    }
}

// Get icon color based on category
function getIconColor(category) {
    const colors = {
        'cold-beverages': '#3498db',    // Blue
        'hot-beverages': '#e74c3c',     // Red
        'pasta': '#f39c12',             // Orange
        'wraps': '#27ae60',             // Green
        'kebab': '#8e44ad',             // Purple
        'waffle': '#d35400',            // Dark Orange
        'sandwich': '#2c3e50',          // Dark Blue
        'maggi': '#e67e22',             // Orange
        'fries': '#27ae60'              // Green (for leaf icon)
    };
    return colors[category] || '#34495e';
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    // Add click event to toggle
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const navbar = document.getElementById('navbar');
                if (navbar) {
                    navbar.style.background = window.scrollY > 100 ? 
                        'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Utility function to shuffle array randomly
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Render menu items without images
function renderMenu(items = filteredMenu) {
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    // Always shuffle items to show random order
    const randomizedItems = shuffleArray(items);
    
    randomizedItems.forEach(item => {
        const currentPrice = getCurrentPrice(item);
        
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <div>
                        <h3>${item.name}</h3>
                        <span class="menu-item-category">${getCategoryName(item.category)}</span>
                    </div>
                </div>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <div class="price-container">
                        <span class="menu-price">₹${currentPrice}</span>
                        ${currentServiceType === 'delivery' && item.dineInPrice !== item.deliveryPrice ? 
                            `<span class="original-price">₹${item.dineInPrice}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Get current price based on service type
function getCurrentPrice(item) {
    return currentServiceType === 'dine-in' ? item.dineInPrice : item.deliveryPrice;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'cold-beverages': 'Cold Beverages',
        'hot-beverages': 'Hot Beverages',
        'sandwich': 'Sandwich',
        'maggi': 'Maggi',
        'fries': 'Fries',
        'pasta': 'Pasta',
        'waffle': 'Waffle',
        'wraps': 'Wraps',
        'kebab': 'Kebab'
    };
    return categoryNames[category] || category;
}

// Initialize search functionality
function initializeSearch() {
    if (!menuSearch) return;
    
    menuSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === '') {
            filteredMenu = [...menuData];
        } else {
            filteredMenu = menuData.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
        }
        // Always render with randomization
        renderMenu(filteredMenu);
    });
}

// Initialize filter functionality
function initializeFilters() {
    if (!filterBtns) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                filteredMenu = [...menuData];
            } else {
                filteredMenu = menuData.filter(item => item.category === category);
            }
            
            // Always render with randomization
            renderMenu(filteredMenu);
        });
    });
}

// Cart functionality
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    // Create cart item with current service pricing
    const cartItem = {
        ...item,
        price: getCurrentPrice(item),
        serviceType: currentServiceType
    };
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...cartItem, quantity: 1 });
    }
    
    updateCartDisplay();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    if (!cartItems || !orderTotal) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} each</p>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button onclick="updateQuantity(${item.id}, -1)" style="background: #f0f0f0; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" style="background: #f0f0f0; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">+</button>
                </div>
                <span>₹${item.price * item.quantity}</span>
                <button onclick="removeFromCart(${item.id})" style="background: #ff4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">×</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    orderTotal.textContent = total;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
    }
}

// Modal functionality
function openOrderModal() {
    if (!orderModal) return;
    
    // Update modal service type
    const modalServiceType = document.getElementById('modal-service-type');
    if (modalServiceType) {
        modalServiceType.textContent = currentServiceType === 'dine-in' ? 'Dine-In' : 'Delivery';
    }
    
    orderModal.style.display = 'block';
    updateCartDisplay();
}

function closeOrderModal() {
    if (!orderModal) return;
    orderModal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === orderModal) {
        closeOrderModal();
    }
});

// Contact functions
function openGoogleMaps() {
    const mapsUrl = "https://maps.app.goo.gl/dmXxvGNXr4ga8cX8A";
    window.open(mapsUrl, '_blank');
}

function makeCall() {
    window.location.href = 'tel:+919399982281';
}

function openWhatsApp() {
    const message = "Hello! I'd like to know more about Tera Tera Café.";
    const whatsappUrl = `https://wa.me/919399982281?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Order via WhatsApp function
function orderViaWhatsApp() {
    if (cart.length === 0) {
        showNotification('Please add items to your cart first!');
        return;
    }
    
    const orderId = generateOrderId();
    let message = `Hello! I'd like to place an order:\n\nOrder ID: ${orderId}\n\n`;
    let total = 0;
    
    cart.forEach(item => {
        message += `${item.name} x${item.quantity} - ₹${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });
    
    message += `\nService Type: ${currentServiceType === 'dine-in' ? 'Dine-In' : 'Delivery'}`;
    message += `\nTotal: ₹${total}\n\nPlease confirm my order. Thank you!`;
    
    const whatsappUrl = `https://wa.me/919399982281?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    showNotification(`Order ${orderId} sent via WhatsApp!`);
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Enhanced security: Generate unique order IDs
function generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `TC${timestamp}${random}`;
}

// PWA functionality (simplified)
function initializePWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    }
}

// Scroll effects (simplified)
function initializeScrollEffects() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Make functions globally accessible
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openOrderModal = openOrderModal;
window.closeOrderModal = closeOrderModal;
window.openGoogleMaps = openGoogleMaps;
window.makeCall = makeCall;
window.openWhatsApp = openWhatsApp;
window.orderViaWhatsApp = orderViaWhatsApp;