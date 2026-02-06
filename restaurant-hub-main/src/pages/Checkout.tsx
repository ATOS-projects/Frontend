import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  if (!isAuthenticated) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center">
            <h1 className="font-display text-3xl font-medium mb-4">
              Login Required
            </h1>
            <p className="text-muted-foreground mb-8">
              Please log in to place an order.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/login">
                <Button size="lg">Log In</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center">
            <h1 className="font-display text-3xl font-medium mb-4">
              No Items to Checkout
            </h1>
            <p className="text-muted-foreground mb-8">
              Your cart is empty. Add some items before checking out.
            </p>
            <Link to="/menu">
              <Button size="lg">Browse Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock order payload (API-ready)
    const orderPayload = {
      items: items.map(({ item, quantity }) => ({
        itemId: item._id,
        name: item.name,
        quantity,
        price: item.price,
      })),
      totalAmount: totalAmount * 1.08,
      customer: formData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log("Order payload:", orderPayload);

    clearCart();
    setLoading(false);
    toast({
      title: "Order Placed Successfully!",
      description: "We'll prepare your order shortly.",
    });
    navigate("/");
  };

  const tax = totalAmount * 0.08;
  const total = totalAmount + tax;

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/cart"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>

          <h1 className="font-display text-4xl font-medium mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              {!isAuthenticated && (
                <div className="bg-primary/10 rounded-xl p-4 mb-6">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-primary font-medium hover:underline"
                    >
                      Log in
                    </Link>{" "}
                    for a faster checkout.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-medium mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="(555) 000-0000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-xl font-medium mb-4">
                    Delivery Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Street Address
                      </label>
                      <Input
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="123 Main St"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          City
                        </label>
                        <Input
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="Mumbai"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          ZIP Code
                        </label>
                        <Input
                          value={formData.zip}
                          onChange={(e) =>
                            setFormData({ ...formData, zip: e.target.value })
                          }
                          placeholder="400001"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Place Order - ₹{total.toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:pl-8">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h2 className="font-display text-xl font-medium mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {items.map(({ item, quantity }) => (
                    <div key={item._id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {quantity}
                      </span>
                      <span className="font-medium">
                        ₹{(item.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium pt-2">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;