 import { users } from "@/data/mockData";
 import { User, Mail, Calendar, Shield } from "lucide-react";
 
 const Users = () => {
   return (
     <div className="space-y-6">
       <div>
         <h1 className="font-display text-2xl font-medium">Users</h1>
         <p className="text-muted-foreground">View registered users</p>
       </div>
 
       {/* Desktop Table */}
       <div className="bg-card rounded-xl border border-border hidden md:block">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="border-b border-border">
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   User
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Email
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Role
                 </th>
                 <th className="text-left text-sm font-medium text-muted-foreground px-5 py-4">
                   Joined
                 </th>
               </tr>
             </thead>
             <tbody>
               {users.map((user) => (
                 <tr
                   key={user._id}
                   className="border-b border-border last:border-0"
                 >
                   <td className="px-5 py-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                         <User className="h-5 w-5 text-muted-foreground" />
                       </div>
                       <span className="font-medium">{user.name}</span>
                     </div>
                   </td>
                   <td className="px-5 py-4 text-sm text-muted-foreground">
                     {user.email}
                   </td>
                   <td className="px-5 py-4">
                     <span
                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                         user.role === "admin"
                           ? "bg-primary/10 text-primary"
                           : "bg-muted text-muted-foreground"
                       }`}
                     >
                       {user.role === "admin" && (
                         <Shield className="h-3 w-3 mr-1" />
                       )}
                       {user.role}
                     </span>
                   </td>
                   <td className="px-5 py-4 text-sm text-muted-foreground">
                     {user.createdAt}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Mobile Cards */}
       <div className="md:hidden space-y-4">
         {users.map((user) => (
           <div
             key={user._id}
             className="bg-card rounded-xl border border-border p-4"
           >
             <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                 <User className="h-6 w-6 text-muted-foreground" />
               </div>
               <div>
                 <p className="font-medium">{user.name}</p>
                 <span
                   className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                     user.role === "admin"
                       ? "bg-primary/10 text-primary"
                       : "bg-muted text-muted-foreground"
                   }`}
                 >
                   {user.role === "admin" && (
                     <Shield className="h-3 w-3 mr-1" />
                   )}
                   {user.role}
                 </span>
               </div>
             </div>
             <div className="space-y-2 text-sm">
               <div className="flex items-center gap-2 text-muted-foreground">
                 <Mail className="h-4 w-4" />
                 {user.email}
               </div>
               <div className="flex items-center gap-2 text-muted-foreground">
                 <Calendar className="h-4 w-4" />
                 Joined {user.createdAt}
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Users;