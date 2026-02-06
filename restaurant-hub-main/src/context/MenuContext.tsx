import React, { createContext, useContext, useState, ReactNode } from "react";
import { MenuItem, menuItems as initialMenuItems } from "@/data/mockData";

interface MenuContextType {
    items: MenuItem[];
    addMenuItem: (item: MenuItem) => void;
    updateMenuItem: (item: MenuItem) => void;
    deleteMenuItem: (id: string) => void;
    toggleAvailability: (id: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<MenuItem[]>(initialMenuItems);

    const addMenuItem = (item: MenuItem) => {
        setItems((prev) => [...prev, item]);
    };

    const updateMenuItem = (updatedItem: MenuItem) => {
        setItems((prev) =>
            prev.map((item) => (item._id === updatedItem._id ? updatedItem : item))
        );
    };

    const deleteMenuItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item._id !== id));
    };

    const toggleAvailability = (id: string) => {
        setItems((prev) =>
            prev.map((item) =>
                item._id === id ? { ...item, available: !item.available } : item
            )
        );
    };

    return (
        <MenuContext.Provider
            value={{
                items,
                addMenuItem,
                updateMenuItem,
                deleteMenuItem,
                toggleAvailability,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}
