import { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, MenuItem } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { useMenu } from "@/context/MenuContext";

const MenuManagement = () => {
  const { items, addMenuItem, updateMenuItem, deleteMenuItem, toggleAvailability } = useMenu();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    available: true,
  });

  const handleAutoFillImage = () => {
    const nameLower = formData.name.toLowerCase();
    let imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"; // Default

    if (nameLower.includes("pizza")) imageUrl = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80";
    else if (nameLower.includes("burger")) imageUrl = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80";
    else if (nameLower.includes("pasta")) imageUrl = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80";
    else if (nameLower.includes("salad")) imageUrl = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80";
    else if (nameLower.includes("dessert") || nameLower.includes("cake")) imageUrl = "https://images.unsplash.com/photo-1563729768-7491131ba718?w=800&q=80";
    else if (nameLower.includes("coffee") || nameLower.includes("tea")) imageUrl = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80";
    else if (nameLower.includes("chicken")) imageUrl = "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80";

    setFormData(prev => ({ ...prev, image: imageUrl }));
    toast({ title: "Image auto-filled!" });
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      available: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      image: item.image,
      available: item.available,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      updateMenuItem({
        ...editingItem,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image: formData.image,
        available: formData.available,
      });
      toast({ title: "Menu item updated" });
    } else {
      const newItem: MenuItem = {
        _id: `new-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image: formData.image || "/placeholder.svg",
        available: formData.available,
      };
      addMenuItem(newItem);
      toast({ title: "Menu item added" });
    }

    setIsModalOpen(false);
  };

  const deleteItem = (id: string) => {
    deleteMenuItem(id);
    toast({ title: "Menu item deleted" });
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-medium">Menu Management</h1>
          <p className="text-muted-foreground">Add, edit, or remove menu items</p>
        </div>
        <Button onClick={openAddModal}>
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-card rounded-xl border border-border p-4"
          >
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-primary font-semibold">₹{item.price}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={item.available}
                    onCheckedChange={() => toggleAvailability(item._id)}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openEditModal(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => deleteItem(item._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingItem ? "Edit Menu Item" : "Add Menu Item"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Dish name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Brief description"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <Input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <div className="flex gap-2">
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
                <Button type="button" onClick={handleAutoFillImage} variant="secondary">
                  Auto-Fill
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={formData.available}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, available: checked })
                }
              />
              <label className="text-sm">Available</label>
            </div>
            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                {editingItem ? "Update" : "Add"} Item
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuManagement;