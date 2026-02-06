import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/MenuCard";
import { menuItems } from "@/data/mockData";
import heroImage from "@/assets/hero-restaurant.jpg";
import dishScallops from "@/assets/dish-scallops.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";
import dishFondant from "@/assets/dish-fondant.jpg";

const featuredDishes = menuItems
  .filter((item) => item.featured)
  .slice(0, 4)
  .filter((item) => item.featured)
  .slice(0, 4);

const testimonials = [
  {
    name: "Sarah M.",
    text: "An absolutely magical dining experience. The truffle risotto was divine.",
    rating: 5,
  },
  {
    name: "James L.",
    text: "Impeccable service and the freshest ingredients. A true gem in the city.",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "The perfect spot for a special occasion. We'll definitely be back!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restro Hub Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
              Fine Dining Experience
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-background mb-6">
              Where Every Dish
              <br />
              <span className="gold-text">Tells a Story</span>
            </h1>
            <p className="text-background/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Experience culinary artistry crafted with passion, served in an
              atmosphere of refined elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="text-base px-8 border-2 border-transparent hover:border-background hover:bg-background hover:text-primary transition-all duration-300"
                >
                  View Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-base px-8 bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary transition-all duration-300"
                >
                  Make a Reservation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">
                Award Winning
              </h3>
              <p className="text-muted-foreground">
                Recognized for culinary excellence with multiple industry awards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">
                Fresh Daily
              </h3>
              <p className="text-muted-foreground">
                Locally sourced ingredients prepared fresh every day.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">
                Prime Location
              </h3>
              <p className="text-muted-foreground">
                Located in the heart of the city with private dining available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
              Our Specialties
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Featured Dishes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <MenuCard key={dish._id} item={dish} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
              Guest Reviews
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background/5 rounded-xl p-6 border border-background/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-background/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
              Reserve Your Table
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join us for an unforgettable dining experience. Book your table
              today and let us create memories for you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Make a Reservation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
