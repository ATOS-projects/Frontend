 import { useState } from "react";
 import { MenuCard } from "@/components/MenuCard";
 import { menuItems, categories } from "@/data/mockData";
 import { cn } from "@/lib/utils";
 import dishScallops from "@/assets/dish-scallops.jpg";
 import dishRisotto from "@/assets/dish-risotto.jpg";
 import dishFondant from "@/assets/dish-fondant.jpg";
 
 // Map some items to real images
 const imageMap: Record<string, string> = {
   "1": dishRisotto,
   "2": dishScallops,
   "8": dishFondant,
 };
 
 const Menu = () => {
   const [activeCategory, setActiveCategory] = useState<string>("All");
 
   const filteredItems = menuItems
     .filter((item) => activeCategory === "All" || item.category === activeCategory)
     .map((item) => ({
       ...item,
       image: imageMap[item._id] || item.image,
     }));
 
   return (
     <div className="section-padding">
       <div className="container-custom">
         {/* Header */}
         <div className="text-center mb-12">
           <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
             Our Offerings
           </p>
           <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
             The Menu
           </h1>
           <p className="text-muted-foreground max-w-xl mx-auto">
             Discover our carefully curated selection of dishes, crafted with the
             finest seasonal ingredients.
           </p>
         </div>
 
         {/* Category Filter */}
         <div className="flex flex-wrap justify-center gap-2 mb-10">
           <button
             onClick={() => setActiveCategory("All")}
             className={cn(
               "px-5 py-2 rounded-full text-sm font-medium transition-colors",
               activeCategory === "All"
                 ? "bg-primary text-primary-foreground"
                 : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
             )}
           >
             All
           </button>
           {categories.map((category) => (
             <button
               key={category}
               onClick={() => setActiveCategory(category)}
               className={cn(
                 "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                 activeCategory === category
                   ? "bg-primary text-primary-foreground"
                   : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
               )}
             >
               {category}
             </button>
           ))}
         </div>
 
         {/* Menu Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {filteredItems.map((item) => (
             <MenuCard key={item._id} item={item} />
           ))}
         </div>
 
         {filteredItems.length === 0 && (
           <div className="text-center py-12">
             <p className="text-muted-foreground">
               No items found in this category.
             </p>
           </div>
         )}
       </div>
     </div>
   );
 };
 
 export default Menu;