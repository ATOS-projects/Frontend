// Mock data structured like MongoDB documents

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  featured?: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
  createdAt: string;
}

export interface OrderItem {
  itemId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  userId: string;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled";
  createdAt: string;
  itemsCount?: number;
}

export const menuItems: MenuItem[] = [
  {
    _id: "1",
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle, aged parmesan, and fresh herbs",
    price: 2500,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=800&q=80",
    available: true,
    featured: true,
  },
  {
    _id: "2",
    name: "Seared Scallops",
    description: "Pan-seared sea scallops with cauliflower purée and brown butter",
    price: 3000,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    available: true,
    featured: true,
  },
  {
    _id: "3",
    name: "Beef Carpaccio",
    description: "Thinly sliced raw beef with arugula, capers, and truffle aioli",
    price: 1800,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    available: true,
  },
  {
    _id: "4",
    name: "Lobster Bisque",
    description: "Rich and creamy lobster soup with brandy and fresh cream",
    price: 1400,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
    available: true,
    featured: true,
  },
  {
    _id: "5",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
    price: 2700,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=800&q=80",
    available: true,
  },
  {
    _id: "6",
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry reduction and roasted potatoes",
    price: 2800,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&q=80",
    available: false,
  },
  {
    _id: "7",
    name: "Caesar Salad",
    description: "Crisp romaine, house-made dressing, parmesan, and garlic croutons",
    price: 1200,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
    available: true,
  },
  {
    _id: "8",
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 900,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    available: true,
    featured: true,
  },
  {
    _id: "9",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 800,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&q=80",
    available: true,
  },
  {
    _id: "10",
    name: "Tiramisu",
    description: "Traditional Italian dessert with espresso-soaked ladyfingers",
    price: 950,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    available: true,
  },
  {
    _id: "11",
    name: "House Red Wine",
    description: "Smooth Cabernet Sauvignon from Napa Valley",
    price: 900,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    available: true,
  },
  {
    _id: "12",
    name: "Sparkling Water",
    description: "Premium Italian sparkling mineral water",
    price: 400,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=800&q=80",
    available: true,
  },
  {
    _id: "13",
    name: "White Sauce Pasta",
    description: "Creamy white sauce pasta with herbs, garlic, and parmesan cheese",
    price: 1500,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=80",
    available: true,
    featured: true,
  },
];

export const users: User[] = [
  {
    _id: "u1",
    name: "Admin User",
    email: "admin@restaurant.com",
    role: "admin",
    createdAt: "2024-01-15",
  },
  {
    _id: "u2",
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    createdAt: "2024-02-20",
  },
  {
    _id: "u3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    createdAt: "2024-03-10",
  },
  {
    _id: "u4",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "user",
    createdAt: "2024-03-25",
  },
];

export const orders: Order[] = [
  {
    _id: "o1",
    userId: "u2",
    customerName: "John Doe",
    items: [
      { itemId: "1", name: "Truffle Risotto", quantity: 2, price: 2500 },
      { itemId: "8", name: "Chocolate Fondant", quantity: 1, price: 900 },
    ],
    totalAmount: 5900,
    status: "delivered",
    createdAt: "2024-12-01T18:30:00",
  },
  {
    _id: "o2",
    userId: "u3",
    customerName: "Jane Smith",
    items: [
      { itemId: "2", name: "Seared Scallops", quantity: 1, price: 3000 },
      { itemId: "4", name: "Lobster Bisque", quantity: 1, price: 1400 },
    ],
    totalAmount: 4400,
    status: "preparing",
    createdAt: "2024-12-02T19:15:00",
  },
  {
    _id: "o3",
    userId: "u4",
    customerName: "Michael Brown",
    items: [
      { itemId: "5", name: "Grilled Salmon", quantity: 1, price: 2700 },
      { itemId: "9", name: "Crème Brûlée", quantity: 2, price: 800 },
    ],
    totalAmount: 4300,
    status: "pending",
    createdAt: "2024-12-02T20:00:00",
  },
  {
    _id: "o4",
    userId: "u2",
    customerName: "John Doe",
    items: [
      { itemId: "3", name: "Beef Carpaccio", quantity: 1, price: 1800 },
      { itemId: "6", name: "Duck Confit", quantity: 2, price: 2800 },
    ],
    totalAmount: 7400,
    status: "ready",
    createdAt: "2024-12-02T19:45:00",
  },
];

export const categories = ["Starters", "Mains", "Desserts", "Beverages"];