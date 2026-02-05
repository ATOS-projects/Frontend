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
    image: "/placeholder.svg",
    available: true,
    featured: true,
  },
  {
    _id: "2",
    name: "Seared Scallops",
    description: "Pan-seared sea scallops with cauliflower purée and brown butter",
    price: 3000,
    category: "Mains",
    image: "/placeholder.svg",
    available: true,
    featured: true,
  },
  {
    _id: "3",
    name: "Beef Carpaccio",
    description: "Thinly sliced raw beef with arugula, capers, and truffle aioli",
    price: 1800,
    category: "Starters",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "4",
    name: "Lobster Bisque",
    description: "Rich and creamy lobster soup with brandy and fresh cream",
    price: 1400,
    category: "Starters",
    image: "/placeholder.svg",
    available: true,
    featured: true,
  },
  {
    _id: "5",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
    price: 2700,
    category: "Mains",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "6",
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry reduction and roasted potatoes",
    price: 2800,
    category: "Mains",
    image: "/placeholder.svg",
    available: false,
  },
  {
    _id: "7",
    name: "Caesar Salad",
    description: "Crisp romaine, house-made dressing, parmesan, and garlic croutons",
    price: 1200,
    category: "Starters",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "8",
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 900,
    category: "Desserts",
    image: "/placeholder.svg",
    available: true,
    featured: true,
  },
  {
    _id: "9",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 800,
    category: "Desserts",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "10",
    name: "Tiramisu",
    description: "Traditional Italian dessert with espresso-soaked ladyfingers",
    price: 950,
    category: "Desserts",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "11",
    name: "House Red Wine",
    description: "Smooth Cabernet Sauvignon from Napa Valley",
    price: 900,
    category: "Beverages",
    image: "/placeholder.svg",
    available: true,
  },
  {
    _id: "12",
    name: "Sparkling Water",
    description: "Premium Italian sparkling mineral water",
    price: 400,
    category: "Beverages",
    image: "/placeholder.svg",
    available: true,
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