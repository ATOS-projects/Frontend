import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className={cn(
        "group bg-card rounded-xl overflow-hidden card-elevated",
        !item.available && "opacity-60"
      )}
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!item.available && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
              Unavailable
            </span>
          </div>
        )}
        {item.featured && item.available && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-medium">{item.name}</h3>
          <span className="font-semibold text-primary">₹{item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <Button
          onClick={handleAddToCart}
          disabled={!item.available}
          className="w-full"
          variant={added ? "secondary" : "default"}
        >
          {added ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Added
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}