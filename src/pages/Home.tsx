import { InteractiveSolarSystem } from "@/components/InteractiveSolarSystem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
              ETHEREAL
            </h1>
            <Sparkles className="h-10 w-10 md:h-14 md:w-14 text-accent animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 font-light tracking-wide">
            -Where Tech and Thrill Collide-
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            This one of a kind event brings together three
electrifying experiences: Build Your Robot, Halo-Ween, and Roborumble, all packed into a
single unforgettable weekend.
          </p>

          <div className="flex gap-6 justify-center items-center flex-wrap mb-12">
            <Link to="/register">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 animate-pulse-glow shadow-lg hover:shadow-xl transition-shadow">
                <Rocket className="h-6 w-6" />
                Register for Event
              </Button>
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 border-2 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    ETHEREAL 2025
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-foreground">
                  <p className="text-center text-xl font-semibold text-muted-foreground italic">
                    -Where Tech and Thrill Collide-
                  </p>
                  
                  <p className="leading-relaxed">
                    ASTRA MEC proudly presents ETHEREAL 2025, a 24-hour fusion of innovation, thrill, and pure fun — happening this October 25th and 26th. This one of a kind event brings together three electrifying experiences: Build Your Robot, Halo-Ween, and Roborumble, all packed into a single unforgettable weekend.
                  </p>
                  
                  <p className="leading-relaxed">
                    Kick off your journey with a hands-on robotics workshop, where you'll design, build, and program your own bot under professional guidance. You also earn an Autodesk certification and 20 KTU activity points, providing both valuable technical skills and academic credit.
                  </p>
                  
                  <p className="leading-relaxed">
                    But that's not all though, the fun will have only begun.
                  </p>
                  
                  <p className="leading-relaxed">
                    The same bot you build will go head-to-head in Roborumble, our action-packed robowar showdown. And right in the middle of all the tech and tension? A chillingly fun Halloween celebration, because what's better than robots and eerie vibes?
                  </p>
                  
                  <p className="leading-relaxed">
                    Unlike the usual workshops, Ethereal gives you your time's worth: real skills, real competition, and real fun. Whether you're here for the engineering, the energy, or the eerie costumes, this is the event to be part of. So gear up, grab your friends, and register now— since this October, the future is getting a little spooky.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
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