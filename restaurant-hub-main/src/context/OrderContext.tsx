import React, { createContext, useContext, useState, ReactNode } from "react";
import { Order, orders as initialOrders } from "@/data/mockData";

interface OrderContextType {
    orders: Order[];
    updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState<Order[]>(initialOrders);

    const updateOrderStatus = (orderId: string, status: Order["status"]) => {
        setOrders((prev) =>
            prev.map((order) =>
                order._id === orderId ? { ...order, status } : order
            )
        );
    };

    return (
        <OrderContext.Provider value={{ orders, updateOrderStatus }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error("useOrders must be used within a OrderProvider");
    }
    return context;
}
