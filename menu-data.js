// Menu Data with optimized, compressed images for faster loading
// Each item has both dine-in and delivery pricing
const menuData = [
    // Cold Beverages
    {
        id: 1,
        name: "Cold Coffee",
        category: "cold-beverages",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Refreshing iced coffee with perfect blend",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 2,
        name: "Kitkat Shake",
        category: "cold-beverages",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Creamy chocolate shake with Kitkat pieces",
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 3,
        name: "Oreo Shake",
        category: "cold-beverages",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Rich and creamy Oreo cookie shake",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 18,
        name: "Virgin Mojito",
        category: "cold-beverages",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Refreshing mint and lime mocktail",
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 19,
        name: "Green Apple",
        category: "cold-beverages",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Fresh green apple flavored drink",
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 20,
        name: "Lemon Soda",
        category: "cold-beverages",
        dineInPrice: 35,
        deliveryPrice: 40,
        description: "Fizzy lemon soda with fresh lime",
        image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Hot Beverages
    {
        id: 4,
        name: "Tea",
        category: "hot-beverages",
        dineInPrice: 15,
        deliveryPrice: 20,
        description: "Classic Indian tea with perfect spices",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 5,
        name: "AI Tea",
        category: "hot-beverages",
        dineInPrice: 20,
        deliveryPrice: 25,
        description: "Special blend tea with unique flavor",
        image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 6,
        name: "Lemon Tea",
        category: "hot-beverages",
        dineInPrice: 15,
        deliveryPrice: 20,
        description: "Refreshing tea with fresh lemon",
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 7,
        name: "Black Coffee",
        category: "hot-beverages",
        dineInPrice: 15,
        deliveryPrice: 20,
        description: "Strong and aromatic black coffee",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 8,
        name: "Classic Coffee",
        category: "hot-beverages",
        dineInPrice: 25,
        deliveryPrice: 30,
        description: "Traditional coffee with milk and sugar",
        image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 9,
        name: "Hot Chocolate",
        category: "hot-beverages",
        dineInPrice: 60,
        deliveryPrice: 70,
        description: "Rich and creamy hot chocolate",
        image: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Pasta
    {
        id: 10,
        name: "White Sauce Pasta",
        category: "pasta",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Creamy white sauce pasta with herbs",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 11,
        name: "Red Sauce Pasta",
        category: "pasta",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Tangy tomato-based pasta with Italian herbs",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 12,
        name: "Makhni Pasta",
        category: "pasta",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Rich and creamy butter pasta",
        image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 13,
        name: "Spicy Garlic Pasta",
        category: "pasta",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Spicy pasta with garlic and herbs",
        image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Wraps & Rolls
    {
        id: 14,
        name: "Chipotle Wrap",
        category: "wraps",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Spicy chipotle wrap with fresh vegetables",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 15,
        name: "Paneer Makhni",
        category: "wraps",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Creamy paneer wrap with makhni sauce",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 16,
        name: "Cheese Garlic",
        category: "wraps",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Cheesy garlic wrap with herbs",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 17,
        name: "Falafel Wrap",
        category: "wraps",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Mediterranean falafel wrap with tahini",
        image: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Kebabs
    {
        id: 21,
        name: "Hara-Bhara Kebab",
        category: "kebab",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Green vegetable kebab with spices",
        image: "https://images.pexels.com/photos/8477552/pexels-photo-8477552.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 22,
        name: "Falafel",
        category: "kebab",
        dineInPrice: 85,
        deliveryPrice: 95,
        description: "Crispy Middle Eastern chickpea balls",
        image: "https://images.pexels.com/photos/6896264/pexels-photo-6896264.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Waffles
    {
        id: 23,
        name: "Dark Chocolate Waffle",
        category: "waffle",
        dineInPrice: 85,
        deliveryPrice: 95,
        description: "Belgian waffle with dark chocolate",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 24,
        name: "Milk Chocolate Waffle",
        category: "waffle",
        dineInPrice: 85,
        deliveryPrice: 95,
        description: "Belgian waffle with milk chocolate",
        image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 25,
        name: "White Chocolate Waffle",
        category: "waffle",
        dineInPrice: 89,
        deliveryPrice: 99,
        description: "Belgian waffle with white chocolate",
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 26,
        name: "Triple Chocolate Waffle",
        category: "waffle",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Ultimate chocolate waffle experience",
        image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 27,
        name: "Kitkat Crunch Waffle",
        category: "waffle",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Waffle topped with Kitkat pieces",
        image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 28,
        name: "Oreo Crunch Waffle",
        category: "waffle",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Waffle topped with Oreo cookies",
        image: "https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 29,
        name: "Hazelnut Love Waffle",
        category: "waffle",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Waffle with hazelnut spread and nuts",
        image: "https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 30,
        name: "Cookie n Crunch Waffle",
        category: "waffle",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Waffle with cookie pieces and crunch",
        image: "https://images.pexels.com/photos/8969288/pexels-photo-8969288.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Grilled Sandwiches
    {
        id: 31,
        name: "Corn Cheese Sandwich",
        category: "sandwich",
        dineInPrice: 65,
        deliveryPrice: 75,
        description: "Grilled sandwich with corn and cheese",
        image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 32,
        name: "Indie Veggie Sandwich",
        category: "sandwich",
        dineInPrice: 60,
        deliveryPrice: 70,
        description: "Indian style vegetable sandwich",
        image: "https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 33,
        name: "Spicy Cheese Garlic Sandwich",
        category: "sandwich",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Spicy grilled sandwich with cheese and garlic",
        image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 34,
        name: "Peri Peri Corn Cheese Sandwich",
        category: "sandwich",
        dineInPrice: 75,
        deliveryPrice: 85,
        description: "Peri peri spiced corn cheese sandwich",
        image: "https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 35,
        name: "Dark Chocolate Sandwich",
        category: "sandwich",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Sweet sandwich with dark chocolate",
        image: "https://images.pexels.com/photos/5946064/pexels-photo-5946064.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 36,
        name: "Triple Choco Sandwich",
        category: "sandwich",
        dineInPrice: 110,
        deliveryPrice: 120,
        description: "Three chocolate varieties in one sandwich",
        image: "https://images.pexels.com/photos/8477547/pexels-photo-8477547.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 37,
        name: "Cookies & Cream Sandwich",
        category: "sandwich",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Sandwich with cookies and cream filling",
        image: "https://images.pexels.com/photos/9980916/pexels-photo-9980916.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Maggi
    {
        id: 38,
        name: "Plain Maggi",
        category: "maggi",
        dineInPrice: 40,
        deliveryPrice: 50,
        description: "Classic Maggi noodles",
        image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 39,
        name: "Peri Peri Maggi",
        category: "maggi",
        dineInPrice: 55,
        deliveryPrice: 65,
        description: "Spicy peri peri flavored Maggi",
        image: "https://images.pexels.com/photos/5718019/pexels-photo-5718019.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 40,
        name: "Peri Peri Cheese Maggi",
        category: "maggi",
        dineInPrice: 70,
        deliveryPrice: 80,
        description: "Cheesy peri peri Maggi noodles",
        image: "https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 41,
        name: "Cheese Maggi",
        category: "maggi",
        dineInPrice: 75,
        deliveryPrice: 85,
        description: "Maggi with cheese and garlic",
        image: "https://images.pexels.com/photos/7937467/pexels-photo-7937467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 42,
        name: "Spicy Garlic Maggi",
        category: "maggi",
        dineInPrice: 75,
        deliveryPrice: 85,
        description: "Spicy garlic flavored Maggi",
        image: "https://images.pexels.com/photos/8477540/pexels-photo-8477540.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 43,
        name: "Veggie Maggi",
        category: "maggi",
        dineInPrice: 40,
        deliveryPrice: 50,
        description: "Maggi with mixed vegetables",
        image: "https://images.pexels.com/photos/9980913/pexels-photo-9980913.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    
    // Fries
    {
        id: 44,
        name: "Plain Salty Fries",
        category: "fries",
        dineInPrice: 60,
        deliveryPrice: 70,
        description: "Classic salted french fries",
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 45,
        name: "Peri Peri Fries",
        category: "fries",
        dineInPrice: 65,
        deliveryPrice: 75,
        description: "Spicy peri peri seasoned fries",
        image: "https://images.pexels.com/photos/4676408/pexels-photo-4676408.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    },
    {
        id: 46,
        name: "Peri Peri Cheese Fries",
        category: "fries",
        dineInPrice: 80,
        deliveryPrice: 90,
        description: "Cheesy peri peri fries",
        image: "https://images.pexels.com/photos/5946067/pexels-photo-5946067.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop&dpr=1"
    }
];