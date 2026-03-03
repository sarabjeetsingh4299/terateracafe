# Tera Tera Café - Modern Mobile-First Website

A modern, responsive café website built with HTML, CSS, and JavaScript, featuring PWA capabilities, online ordering, and a clean Starbucks-inspired design.

## 🚀 Features

### 📱 Mobile-First Design
- Responsive design that works perfectly on all devices
- Touch-friendly interface optimized for mobile users
- Fast loading with smooth animations

### 🛒 Online Ordering System
- Interactive menu with search and filtering
- Shopping cart functionality
- WhatsApp integration for easy ordering
- Order summary and checkout process

### 📞 Contact Integration
- One-click phone calling
- WhatsApp messaging integration
- Google Maps integration for directions
- Contact form and location details

### 🎨 Modern UI/UX
- Starbucks/Third Wave Coffee inspired design
- Clean, professional layout
- Smooth animations and transitions
- Loading screen with coffee animation

### 📱 PWA (Progressive Web App)
- Installable on mobile devices
- Offline functionality with service worker
- App-like experience
- Background sync for offline orders
- Push notifications support

### 🔍 Advanced Menu Features
- Real-time search functionality
- Category filtering (Beverages, Food, Desserts)
- Complete menu based on provided images
- Detailed item descriptions and pricing

## 📋 Menu Items

The website includes a comprehensive menu based on your café images:

### Beverages
- **Cold Beverages**: Cold Coffee, Kitkat Shake, Oreo Shake
- **Hot Beverages**: Tea, AI Tea, Lemon Tea, Black Coffee, Classic Coffee, Hot Chocolate
- **Mojitos**: Virgin Mojito, Green Apple, Lemon Soda

### Food
- **Pasta**: White Sauce, Red Sauce, Makhni, Spicy Garlic
- **Wraps & Rolls**: Chipotle Wrap, Paneer Makhni, Cheese Garlic, Falafel Wrap
- **Grilled Sandwiches**: Various cheese and veggie combinations
- **Maggi**: Plain, Peri Peri, Cheese variants
- **Fries**: Plain Salty, Peri Peri, Cheese options
- **Kebabs**: Hara-Bhara Kebab, Falafel

### Desserts
- **Waffles**: Multiple chocolate varieties, Kitkat Crunch, Oreo Crunch, Hazelnut Love
- **Sweet Sandwiches**: Dark Chocolate, Triple Choco, Cookies & Cream

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and PWA features
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: PWA configuration
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family for modern typography

## 📱 Installation & Setup

1. **Clone or download** the project files
2. **Open index.html** in a web browser
3. **For PWA features**, serve the files through a web server (required for service worker)

### Local Development Server
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 PWA Installation

### On Mobile (Android/iOS):
1. Open the website in Chrome/Safari
2. Tap the "Add to Home Screen" option
3. Or use the "Install App" button in the footer

### On Desktop:
1. Open in Chrome/Edge
2. Click the install icon in the address bar
3. Or use the "Install App" button in the footer

## 🎨 Customization

### Colors & Branding
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2D1810;    /* Main brand color */
    --secondary-color: #8B4513;  /* Secondary brand color */
    --accent-color: #D2691E;     /* Accent color */
}
```

### Menu Items
Update the `menuData` array in `script.js` to modify menu items, prices, and descriptions.

### Contact Information
Update contact details in:
- `index.html` (contact section)
- `script.js` (phone numbers, WhatsApp, address)

### Logo & Icons
Replace the coffee emoji (☕) with your actual logo in:
- Navigation bar
- Footer
- Loading screen
- Add actual icon files to the `icons/` folder

## 📞 Contact Integration Setup

### WhatsApp Integration
Update the phone number in `script.js`:
```javascript
const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
```

### Phone Calling
Update the phone number in the `makeCall()` function:
```javascript
window.location.href = 'tel:YOUR_PHONE_NUMBER';
```

### Google Maps
Update the address in the `openGoogleMaps()` function:
```javascript
const address = "Your Actual Address";
```

## 🔧 Advanced Features

### Offline Ordering
The service worker caches orders when offline and syncs them when connection is restored.

### Push Notifications
Ready for push notification integration (requires backend setup).

### Analytics Integration
Add Google Analytics or other tracking codes to monitor user behavior.

### Payment Gateway
The checkout function is ready for payment gateway integration.

## 📱 Browser Support

- ✅ Chrome (recommended for full PWA features)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Lazy loading** for images and content
- **Debounced search** for better performance
- **Efficient caching** with service worker
- **Optimized animations** with CSS transforms
- **Minimal JavaScript** for fast loading

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support or customization requests, please contact:
- **Email**: info@terateracafe.com
- **Phone**: +91 98765 43210
- **WhatsApp**: [Chat with us](https://wa.me/919876543210)

---

**Tera Tera Café** - Premium coffee and food experience with modern technology! ☕✨
