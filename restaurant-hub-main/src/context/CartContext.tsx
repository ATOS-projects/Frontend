 import React, { createContext, useContext, useState, ReactNode } from "react";
 import { MenuItem } from "@/data/mockData";
 
 export interface CartItem {
   item: MenuItem;
   quantity: number;
 }
 
 interface CartContextType {
   items: CartItem[];
   addToCart: (item: MenuItem) => void;
   removeFromCart: (itemId: string) => void;
   updateQuantity: (itemId: string, quantity: number) => void;
   clearCart: () => void;
   totalItems: number;
   totalAmount: number;
 }
 
 const CartContext = createContext<CartContextType | undefined>(undefined);
 
 export function CartProvider({ children }: { children: ReactNode }) {
   const [items, setItems] = useState<CartItem[]>([]);
 
   const addToCart = (item: MenuItem) => {
     setItems((prev) => {
       const existingItem = prev.find((i) => i.item._id === item._id);
       if (existingItem) {
         return prev.map((i) =>
           i.item._id === item._id
             ? { ...i, quantity: i.quantity + 1 }
             : i
         );
       }
       return [...prev, { item, quantity: 1 }];
     });
   };
 
   const removeFromCart = (itemId: string) => {
     setItems((prev) => prev.filter((i) => i.item._id !== itemId));
   };
 
   const updateQuantity = (itemId: string, quantity: number) => {
     if (quantity <= 0) {
       removeFromCart(itemId);
       return;
     }
     setItems((prev) =>
       prev.map((i) =>
         i.item._id === itemId ? { ...i, quantity } : i
       )
     );
   };
 
   const clearCart = () => {
     setItems([]);
   };
 
   const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
   const totalAmount = items.reduce(
     (sum, i) => sum + i.item.price * i.quantity,
     0
   );
 
   return (
     <CartContext.Provider
       value={{
         items,
         addToCart,
         removeFromCart,
         updateQuantity,
         clearCart,
         totalItems,
         totalAmount,
       }}
     >
       {children}
     </CartContext.Provider>
   );
 }
 
 export function useCart() {
   const context = useContext(CartContext);
   if (context === undefined) {
     throw new Error("useCart must be used within a CartProvider");
   }
   return context;
 }