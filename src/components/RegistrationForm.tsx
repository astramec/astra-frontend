import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket } from "lucide-react";
import { toast } from "sonner";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Redirect to payment gateway (replace with your actual payment URL)
    const paymentGatewayURL = "https://your-payment-gateway.com";
    window.location.href = paymentGatewayURL;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass-card rounded-2xl p-8 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Join the Mission
        </h2>
        <p className="text-muted-foreground">Register for Astra's cosmic event</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-input/50 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-input/50 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-input/50 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="college" className="text-foreground">
            College/Institution
          </Label>
          <Input
            id="college"
            name="college"
            type="text"
            placeholder="Your institution name"
            value={formData.college}
            onChange={handleChange}
            className="bg-input/50 border-border focus:border-primary transition-colors"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-pulse-glow"
        >
          <Rocket className="mr-2 h-5 w-5" />
          Let's Register
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-6">
        By registering, you agree to our terms and conditions
      </p>
    </div>
  );
};
