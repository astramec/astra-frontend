import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, Upload } from "lucide-react";
import { toast } from "sonner";
import QRCode from "react-qr-code";


export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });
  const [showPayment, setShowPayment] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  // Your actual UPI payment link (replace with real details)
  const upiLink = `upi://pay?pa=aswanthmadhav07@okicici&pn=AstraEvent&am=150&cu=INR`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show payment section instead of redirect
    setShowPayment(true);
    toast.info("Almost there! Please complete your payment.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(URL.createObjectURL(file));
      toast.success("Screenshot uploaded successfully!");
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Join the Mission
        </h2>
        <p className="text-muted-foreground">
          Register for Astra's cosmic event
        </p>
      </div>

      {!showPayment ? (
        // Registration Form
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
              placeholder="+91 12345 67890"
              value={formData.phone}
              onChange={handleChange}
              required
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
      ) : (
        // Payment Section
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              Complete Your Payment
            </h3>
            <p className="text-sm text-muted-foreground">
              Scan this QR using <b>GPay</b> or any UPI app to pay ₹150
            </p>
          </div>

          <QRCode value={upiLink} size={180} />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              UPI ID: <span className="font-medium">yourupiid@oksbi</span>
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 mt-4 w-full">
            <Label htmlFor="screenshot">Upload Payment Screenshot</Label>
            <Input
              id="screenshot"
              type="file"
              accept="image/*"
              onChange={handleScreenshotUpload}
              className="cursor-pointer"
            />

            {screenshot && (
              <div className="mt-4">
                <img
                  src={screenshot}
                  alt="Payment Screenshot"
                  className="rounded-lg border shadow-md w-56"
                />
              </div>
            )}

            <Button
              variant="outline"
              onClick={() => toast.success("Registration completed successfully!")}
              className="mt-4"
            >
              <Upload className="mr-2 h-5 w-5" /> Submit Proof
            </Button>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center mt-6">
        By registering, you agree to our terms and conditions
      </p>
    </div>
  );
};
