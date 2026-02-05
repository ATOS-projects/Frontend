 import { useState } from "react";
 import { orders, Order } from "@/data/mockData";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { toast } from "@/hooks/use-toast";
 
 const statusOptions = ["pending", "preparing", "ready", "delivered", "cancelled"];
 
 const Orders = () => {
   const [orderList, setOrderList] = useState<Order[]>(orders);
 
   const updateStatus = (orderId: string, newStatus: string) => {
     setOrderList((prev) =>
       prev.map((order) =>
         order._id === orderId
           ? { ...order, status: newStatus as Order["status"] }
           : order
       )
     );
     toast({
       title: "Order Updated",
       description: `Order #${orderId} status changed to ${newStatus}`,
     });
   };
 
   return (
     <div className="space-y-6">
       <div>
         <h1 className="font-display text-2xl font-medium">Orders</h1>
         <p className="text-muted-foreground">
           Manage and track all restaurant orders
         </p>
       </div>
 
       {/* Desktop Table */}
       <div className="bg-card rounded-xl border border-border hidden md:block">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="border-b border-border">
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Order ID
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Customer
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Items
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Total
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Date
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Status
                 </th>
               </tr>
             </thead>
             <tbody>
               {orderList.map((order) => (
                 <tr
                   key={order._id}
                   className="border-b border-border last:border-0"
                 >
                   <td className="px-5 py-4 text-sm font-medium">#{order._id}</td>
                   <td className="px-5 py-4 text-sm">{order.customerName}</td>
                   <td className="px-5 py-4 text-sm text-muted-foreground">
                     {order.items.map((i) => `${i.name} (${i.quantity})`).join(", ")}
                   </td>
                   <td className="px-5 py-4 text-sm font-medium">
                     ${order.totalAmount}
                   </td>
                   <td className="px-5 py-4 text-sm text-muted-foreground">
                     {new Date(order.createdAt).toLocaleDateString()}
                   </td>
                   <td className="px-5 py-4">
                     <Select
                       value={order.status}
                       onValueChange={(value) => updateStatus(order._id, value)}
                     >
                       <SelectTrigger className="w-32">
                         <SelectValue />
                       </SelectTrigger>
                       <SelectContent>
                         {statusOptions.map((status) => (
                           <SelectItem key={status} value={status}>
                             <span className="capitalize">{status}</span>
                           </SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Mobile Cards */}
       <div className="md:hidden space-y-4">
         {orderList.map((order) => (
           <div
             key={order._id}
             className="bg-card rounded-xl border border-border p-4 space-y-3"
           >
             <div className="flex items-center justify-between">
               <span className="font-medium">Order #{order._id}</span>
               <Select
                 value={order.status}
                 onValueChange={(value) => updateStatus(order._id, value)}
               >
                 <SelectTrigger className="w-28">
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   {statusOptions.map((status) => (
                     <SelectItem key={status} value={status}>
                       <span className="capitalize">{status}</span>
                     </SelectItem>
                   ))}
                 </SelectContent>
               </Select>
             </div>
             <div className="text-sm">
               <span className="text-muted-foreground">Customer: </span>
               {order.customerName}
             </div>
             <div className="text-sm">
               <span className="text-muted-foreground">Items: </span>
               {order.items.map((i) => `${i.name} (${i.quantity})`).join(", ")}
             </div>
             <div className="flex items-center justify-between text-sm">
               <span className="text-muted-foreground">
                 {new Date(order.createdAt).toLocaleDateString()}
               </span>
               <span className="font-semibold text-primary">
                 ${order.totalAmount}
               </span>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Orders;