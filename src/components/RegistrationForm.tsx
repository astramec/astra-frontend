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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    screenshot: "",
  });

  const [showPayment, setShowPayment] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [tempUserId, setTempUserId] = useState<string | null>(null);

  const upiLink = `upi://pay?pa=sebinkuttan2004-1@okicici&pn=AstraEvent&am=799&cu=INR`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setScreenshot(file);
    setErrors({ ...errors, screenshot: "" });
    if (file) toast.success("Screenshot selected!");
  };

  const validateVerify = () => {
    const newErrors = { name: "", email: "", phone: "", college: "", screenshot: "" };
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = "Name is required"; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Email is required"; isValid = false; }
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) { newErrors.email = "Invalid email"; isValid = false; }

    if (!formData.phone.trim()) { newErrors.phone = "Phone is required"; isValid = false; }
    else if (!/^\d{10}$/.test(formData.phone.trim())) { newErrors.phone = "Phone must be 10 digits"; isValid = false; }

    if (!formData.college.trim()) { newErrors.college = "College is required"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const validatePayment = () => {
    if (!screenshot) {
      setErrors(prev => ({ ...prev, screenshot: "Payment screenshot is required" }));
      return false;
    }
    return true;
  };

  // Step 1: Verify info and get tempUserId
  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBackendError(null);

    if (!validateVerify()) { toast.error("Please fix the errors in the form"); return; }

    try {
      const response = await fetch("http://localhost:3000/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phoneno: formData.phone.trim(),
          college: formData.college.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) { setBackendError(data.message); toast.error(data.message); return; }

      setTempUserId(data.tempUserId);
      setShowPayment(true);
      toast.success("Verification successful! Proceed to payment.");
    } catch (err: any) {
      toast.error(err.message || "Verification failed");
    }
  };

  // Step 2: Upload screenshot with tempUserId
  const handlePaymentSubmit = async () => {
    if (!validatePayment()) { toast.error("Please upload payment screenshot"); return; }
    if (!tempUserId) { toast.error("Temp user ID missing. Please verify again."); return; }

    try {
      const formPayload = new FormData();
      formPayload.append("tempUserId", tempUserId);
      if (screenshot) formPayload.append("screenshot", screenshot);

      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();
      if (!response.ok) { toast.error(data.message || "Payment registration failed"); return; }

      toast.success("Registration completed successfully!");
    } catch (err: any) {
      toast.error(err.message || "Payment submission failed");
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Join the Mission
        </h2>
        <p className="text-muted-foreground">Register for Astra's cosmic event</p>
      </div>

      {!showPayment ? (
        <form onSubmit={handleVerifySubmit} className="space-y-6">
          {["name", "email", "phone", "college"].map((field) => (
            <div className="space-y-2" key={field}>
              <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-destructive">*</span></Label>
              <Input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter your ${field}`}
                value={(formData as any)[field]}
                onChange={handleChange}
                className="bg-input/50 border-border focus:border-primary transition-colors"
              />
              {(errors as any)[field] && <p className="text-destructive text-sm">{(errors as any)[field]}</p>}
            </div>
          ))}

          {backendError && <p className="text-destructive text-sm text-center">{backendError}</p>}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-pulse-glow">
            <Rocket className="mr-2 h-5 w-5" /> Let's Register
          </Button>
        </form>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Complete Your Payment</h3>
            <p className="text-sm text-muted-foreground">Scan this QR using <b>GPay</b> or any UPI app to pay ₹799</p>
          </div>

          <QRCode value={upiLink} size={180} />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">UPI ID: <span className="font-medium">sebinkuttan2004-1@okicici</span></p>
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
            {(errors as any).screenshot && <p className="text-destructive text-sm">{(errors as any).screenshot}</p>}

            {screenshot && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(screenshot)}
                  alt="Payment Screenshot"
                  className="rounded-lg border shadow-md w-56"
                />
              </div>
            )}

            <Button variant="outline" onClick={handlePaymentSubmit} className="mt-4">
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
