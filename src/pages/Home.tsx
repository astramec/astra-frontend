import { useState } from "react";
import { InteractiveSolarSystem } from "@/components/InteractiveSolarSystem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, Rocket, X } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleCloseAlert = () => {
    setFadeOut(true);
    setTimeout(() => setShowAlert(false), 500);
  };

  if (showAlert) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 text-white p-4 sm:p-6 text-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative w-full sm:max-w-3xl bg-gray-900/95 p-6 sm:p-8 rounded-xl shadow-xl animate-fade-in">
          {/* Close button */}
          <button
            onClick={handleCloseAlert}
            className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-700">IMPORTANT NOTICE</h2>
          <p className="text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed">
            Please <b className="text-red-600 font-bold">DO NOT EXIT OR RELOAD THE PAGE</b> during the registration process.
            <br />
            Fill in your credentials carefully and follow all the steps thoroughly to ensure successful registration.
          </p>

          <Button
            onClick={handleCloseAlert}
            className="mt-3 sm:mt-4 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg text-black"
          >
            I Understand
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <InteractiveSolarSystem />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="text-center animate-fade-in max-w-full sm:max-w-5xl mx-auto">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-8">
            <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-primary animate-pulse" />
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">
              ETHEREAL
            </h1>
            <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-accent animate-pulse" />
          </div>

          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 font-light tracking-wide">
            -Where Tech and Thrill Collide-
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            This one of a kind event brings together three electrifying experiences: Build Your Robot, Halo-Ween, and Roborumble, all packed into a single unforgettable weekend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 w-full sm:w-auto">
            <Link to="/register" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 text-lg px-6 sm:px-8 py-4 animate-pulse-glow shadow-lg hover:shadow-xl transition-shadow">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                Register for Event
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto gap-2 text-lg px-6 sm:px-8 py-4 border-2 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all"
                >
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-full sm:max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    ETHEREAL 2025
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-2 sm:space-y-4 text-foreground text-sm sm:text-base">
                  <p className="text-center text-lg sm:text-xl font-semibold text-muted-foreground italic">
                    -Where Tech and Thrill Collide-
                  </p>
                  <p>ASTRA MEC proudly presents ETHEREAL 2025, a 24-hour fusion of innovation, thrill, and pure fun — happening this October 25th and 26th. This one of a kind event brings together three electrifying experiences: Build Your Robot, Halo-Ween, and Roborumble, all packed into a single unforgettable weekend.</p>
                  <p>Kick off your journey with a hands-on robotics workshop, where you'll design, build, and program your own bot under professional guidance. You also earn an Autodesk certification and 20 KTU activity points, providing both valuable technical skills and academic credit.</p>
                  <p>But that's not all though, the fun will have only begun.</p>
                  <p>The same bot you build will go head-to-head in Roborumble, our action-packed robowar showdown. And right in the middle of all the tech and tension? A chillingly fun Halloween celebration, because what's better than robots and eerie vibes?</p>
                  <p>Unlike the usual workshops, Ethereal gives you your time's worth: real skills, real competition, and real fun. Whether you're here for the engineering, the energy, or the eerie costumes, this is the event to be part of. So gear up, grab your friends, and register now— since this October, the future is getting a little spooky.</p>
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
