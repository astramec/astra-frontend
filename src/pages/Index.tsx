import { SpaceScene } from "@/components/SpaceScene";
import { RegistrationForm } from "@/components/RegistrationForm";
import { StarField } from "@/components/StarField";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Space Background */}
      <SpaceScene />
      
      {/* Star Field Overlay */}
      <StarField />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ASTRA
            </h1>
            <Sparkles className="h-8 w-8 text-accent animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            Explore the Universe with Us
          </p>
          <p className="text-sm md:text-base text-muted-foreground/70">
            Join the most exciting space-themed event of the year
          </p>
        </div>

        {/* Registration Form */}
        <RegistrationForm />

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground/60 text-sm">
          <p>© 2024 Astra Club. All rights reserved.</p>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </div>
  );
};

export default Index;
