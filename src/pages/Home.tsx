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
        <div className="text-center animate-fade-in max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-4 mb-8">
            <Sparkles className="h-10 w-10 md:h-14 md:w-14 text-primary animate-pulse" />
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">
              ASTRA
            </h1>
            <Sparkles className="h-10 w-10 md:h-14 md:w-14 text-accent animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 font-light tracking-wide">
            Journey Through the Cosmos
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the wonders of our solar system in an interactive 3D environment. 
            Move your mouse to control the orbital speed and direction of the planets.
          </p>

          <div className="flex gap-6 justify-center items-center flex-wrap mb-12">
            <Link to="/register">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 animate-pulse-glow shadow-lg hover:shadow-xl transition-shadow">
                <Rocket className="h-6 w-6" />
                Register for Event
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 border-2 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all">
              Learn More
            </Button>
          </div>

          <div className="mt-8 text-sm md:text-base text-muted-foreground/80 glass-card px-6 py-4 inline-block rounded-full">
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
