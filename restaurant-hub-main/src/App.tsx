import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

import { MenuProvider } from "@/context/MenuContext";

// Layouts
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { AdminLayout } from "@/components/layout/AdminLayout";

// Customer Pages
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import MenuManagement from "./pages/admin/MenuManagement";
import Users from "./pages/admin/Users";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { OrderProvider } from "@/context/OrderContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <MenuProvider>
          <OrderProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  {/* Customer Routes */}
                  <Route element={<CustomerLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                  </Route>

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/register" element={<AdminRegister />} />
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="menu" element={<MenuManagement />} />
                    <Route path="users" element={<Users />} />
                  </Route>

                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </OrderProvider>
        </MenuProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
