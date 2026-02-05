import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-3xl font-medium mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet. Explore our
              menu and find something delicious!
            </p>
            <Link to="/menu">
              <Button size="lg">Browse Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl font-medium mb-2">Your Cart</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {items.map(({ item, quantity }) => (
              <div
                key={item._id}
                className="bg-card rounded-xl p-4 flex items-center gap-4 card-elevated"
              >
                <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-medium truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.description}
                  </p>
                  <p className="text-primary font-semibold mt-1">
                    ₹{item.price}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item._id, quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item._id, quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="font-semibold">₹{item.price * quantity}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => removeFromCart(item._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-secondary rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">₹{totalAmount}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Tax (8%)</span>
              <span className="font-medium">
                ₹{(totalAmount * 0.08).toFixed(2)}
              </span>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-semibold text-primary">
                ₹{(totalAmount * 1.08).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/menu" className="sm:flex-1">
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout" className="sm:flex-1">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;