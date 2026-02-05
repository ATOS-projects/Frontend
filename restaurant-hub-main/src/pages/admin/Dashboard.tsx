 import { DollarSign, ShoppingCart, Users, UtensilsCrossed, TrendingUp } from "lucide-react";
 import { orders, menuItems, users } from "@/data/mockData";
 
 const stats = [
   {
     label: "Total Revenue",
     value: "$12,450",
     change: "+12.5%",
     icon: DollarSign,
     color: "text-success",
   },
   {
     label: "Orders Today",
     value: orders.length.toString(),
     change: "+3.2%",
     icon: ShoppingCart,
     color: "text-primary",
   },
   {
     label: "Menu Items",
     value: menuItems.length.toString(),
     change: "Active",
     icon: UtensilsCrossed,
     color: "text-accent",
   },
   {
     label: "Customers",
     value: users.filter((u) => u.role === "user").length.toString(),
     change: "+5.8%",
     icon: Users,
     color: "text-primary",
   },
 ];
 
 const recentOrders = orders.slice(0, 5);
 
 const Dashboard = () => {
   return (
     <div className="space-y-6">
       <div>
         <h1 className="font-display text-2xl font-medium">Dashboard</h1>
         <p className="text-muted-foreground">
           Welcome back! Here's an overview of your restaurant.
         </p>
       </div>
 
       {/* Stats Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {stats.map((stat) => (
           <div
             key={stat.label}
             className="bg-card rounded-xl p-5 border border-border"
           >
             <div className="flex items-start justify-between mb-3">
               <div className="p-2 rounded-lg bg-muted">
                 <stat.icon className={`h-5 w-5 ${stat.color}`} />
               </div>
               <div className="flex items-center text-xs text-success font-medium">
                 <TrendingUp className="h-3 w-3 mr-1" />
                 {stat.change}
               </div>
             </div>
             <p className="text-2xl font-semibold mb-1">{stat.value}</p>
             <p className="text-sm text-muted-foreground">{stat.label}</p>
           </div>
         ))}
       </div>
 
       {/* Recent Orders */}
       <div className="bg-card rounded-xl border border-border">
         <div className="p-5 border-b border-border">
           <h2 className="font-display text-lg font-medium">Recent Orders</h2>
         </div>
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="border-b border-border">
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-3">
                   Order ID
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-3">
                   Customer
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-3">
                   Items
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-3">
                   Total
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-3">
                   Status
                 </th>
               </tr>
             </thead>
             <tbody>
               {recentOrders.map((order) => (
                 <tr key={order._id} className="border-b border-border last:border-0">
                   <td className="px-5 py-4 text-sm font-medium">#{order._id}</td>
                   <td className="px-5 py-4 text-sm">{order.customerName}</td>
                   <td className="px-5 py-4 text-sm text-muted-foreground">
                     {order.items.length} items
                   </td>
                   <td className="px-5 py-4 text-sm font-medium">
                     ${order.totalAmount}
                   </td>
                   <td className="px-5 py-4">
                     <StatusBadge status={order.status} />
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Quick Stats Chart Placeholder */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         <div className="bg-card rounded-xl border border-border p-5">
           <h3 className="font-display text-lg font-medium mb-4">Revenue Chart</h3>
           <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
             <p className="text-muted-foreground text-sm">Chart Placeholder</p>
           </div>
         </div>
         <div className="bg-card rounded-xl border border-border p-5">
           <h3 className="font-display text-lg font-medium mb-4">Popular Items</h3>
           <div className="space-y-3">
             {menuItems
               .filter((item) => item.featured)
               .slice(0, 4)
               .map((item, index) => (
                 <div
                   key={item._id}
                   className="flex items-center justify-between p-3 bg-muted rounded-lg"
                 >
                   <div className="flex items-center gap-3">
                     <span className="text-sm font-medium text-muted-foreground">
                       #{index + 1}
                     </span>
                     <span className="text-sm font-medium">{item.name}</span>
                   </div>
                   <span className="text-sm text-primary font-medium">
                     ${item.price}
                   </span>
                 </div>
               ))}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 function StatusBadge({ status }: { status: string }) {
   const styles: Record<string, string> = {
     pending: "bg-yellow-100 text-yellow-800",
     preparing: "bg-blue-100 text-blue-800",
     ready: "bg-green-100 text-green-800",
     delivered: "bg-gray-100 text-gray-800",
     cancelled: "bg-red-100 text-red-800",
   };
 
   return (
     <span
       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
         styles[status] || styles.pending
       }`}
     >
       {status}
     </span>
   );
 }
 
 export default Dashboard;