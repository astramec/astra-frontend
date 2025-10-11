import { InteractiveSolarSystem } from "@/components/InteractiveSolarSystem";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive Solar System Background */}
      <InteractiveSolarSystem />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ASTRA
            </h1>
            <Sparkles className="h-12 w-12 text-accent animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl text-foreground mb-4 font-light">
            Journey Through the Cosmos
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the wonders of our solar system. Move your mouse to control the orbital speed 
            and direction of the planets. Explore, interact, and discover.
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Link to="/register">
              <Button size="lg" className="gap-2 animate-pulse-glow">
                <Rocket className="h-5 w-5" />
                Register for Event
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="gap-2">
              Learn More
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground/70">
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Move your mouse left/right to control planet orbits
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </div>
  );
};

export default Home;
