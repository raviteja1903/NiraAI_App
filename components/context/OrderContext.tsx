import React, { createContext, useContext, useState } from "react";

type OrderItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type Order = {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
};

type OrderContextType = {
  orders: Order[];
  placeOrder: (items: OrderItem[], total: number) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const placeOrder = (items: OrderItem[], total: number) => {
    const newOrder: Order = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      status: "Placed",
      total,
      items,
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }
  return context;
};
