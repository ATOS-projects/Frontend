import aboutImage from "@/assets/about-interior.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="RestroHub Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-background mb-4">
            Our Story
          </h1>
          <p className="text-background/80 text-lg max-w-xl mx-auto">
            A passion for culinary excellence since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
                About RestroHub
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium">
                Where Tradition Meets Innovation
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                RestroHub was founded with a simple yet ambitious vision: to create
                a dining experience that celebrates the art of fine cuisine while
                honoring timeless culinary traditions.
              </p>
              <p>
                Our executive chef, trained in the finest kitchens of Paris and
                Tokyo, brings together classical techniques with contemporary
                creativity. Every dish is a testament to our commitment to quality,
                from the carefully sourced ingredients to the meticulous
                presentation.
              </p>
              <p>
                The restaurant itself is designed to be an extension of our
                philosophy—warm, inviting, yet sophisticated. With intimate
                lighting, comfortable seating, and attentive service, we create an
                atmosphere where memories are made and special moments are
                celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 card-elevated">
              <h3 className="font-display text-xl font-medium mb-3">
                Quality First
              </h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients from trusted local farms
                and sustainable suppliers.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 card-elevated">
              <h3 className="font-display text-xl font-medium mb-3">
                Culinary Craft
              </h3>
              <p className="text-muted-foreground">
                Every dish is prepared with precision, passion, and respect for
                culinary traditions.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 card-elevated">
              <h3 className="font-display text-xl font-medium mb-3">
                Guest Experience
              </h3>
              <p className="text-muted-foreground">
                We believe dining should be an experience that engages all the
                senses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
              The Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Meet Our Culinary Artists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="font-display text-lg font-medium">
                Chef Marcus Laurent
              </h3>
              <p className="text-muted-foreground text-sm">Executive Chef</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="font-display text-lg font-medium">
                Sofia Montague
              </h3>
              <p className="text-muted-foreground text-sm">Sous Chef</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="font-display text-lg font-medium">
                Antoine Beaumont
              </h3>
              <p className="text-muted-foreground text-sm">Pastry Chef</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;