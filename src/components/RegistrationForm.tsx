import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, Upload } from "lucide-react";
import { toast } from "sonner";
import QRCode from "react-qr-code";
import { LumaCheckoutButton } from "@/components/LumaCheckoutButton";

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
  const [stage, setStage] = useState<"verify" | "payment" | "final" | "thankyou">("verify");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [tempUserId, setTempUserId] = useState<string | null>(null);

  const upiLink = `upi://pay?pa=sebinkuttan2004-1@okicici&pn=AstraEvent&am=799&cu=INR`;

  // Track if Luma checkout was clicked
  const [lumaClicked, setLumaClicked] = useState(false);

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

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBackendError(null);
    if (!validateVerify()) { toast.error("Please fix the errors in the form"); return; }

    try {
      const response = await fetch("https://astra-backend-2t8z.onrender.com/api/verify", {
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
      setStage("payment");
      toast.success("Verification successful! Proceed to payment.");
    } catch (err: any) {
      toast.error(err.message || "Verification failed");
    }
  };

  const handlePaymentSubmit = async () => {
    if (!validatePayment()) { toast.error("Please upload payment screenshot"); return; }
    if (!tempUserId) { toast.error("Temp user ID missing. Please verify again."); return; }

    try {
      const formPayload = new FormData();
      formPayload.append("tempUserId", tempUserId);
      if (screenshot) formPayload.append("screenshot", screenshot);

      const response = await fetch("https://astra-backend-2t8z.onrender.com/api/register", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();
      if (!response.ok) { toast.error(data.message || "Payment registration failed"); return; }

      toast.success("Payment uploaded successfully!");
      setStage("final");
    } catch (err: any) {
      toast.error(err.message || "Payment submission failed");
    }
  };

  // Detect Luma popup close
  useEffect(() => {
    if (stage === "final" && lumaClicked) {
      const checkPopupClosed = setInterval(() => {
        // The Luma checkout button creates an overlay div with class "luma-overlay"
        const overlay = document.querySelector(".luma-overlay");
        if (!overlay) {
          clearInterval(checkPopupClosed);
          setStage("thankyou"); // show thank you after closing
        }
      }, 500);
    }
  }, [stage, lumaClicked]);

  return (
    <div className="glass-card rounded-2xl p-8 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Join the Mission
        </h2>
        <p className="text-muted-foreground">Register for Astra's cosmic event</p>
      </div>

      {stage === "verify" && (
        <form onSubmit={handleVerifySubmit} className="space-y-6">
          {["name", "email", "phone", "college"].map((field) => (
            <div key={field} className="space-y-2">
              <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-destructive">*</span></Label>
              <Input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter your ${field}`}
                value={(formData as any)[field]}
                onChange={handleChange}
              />
              {(errors as any)[field] && <p className="text-destructive text-sm">{(errors as any)[field]}</p>}
            </div>
          ))}
          {backendError && <p className="text-destructive text-sm text-center">{backendError}</p>}
          <Button type="submit"><Rocket className="mr-2" /> Let's Register</Button>
        </form>
      )}

      {stage === "payment" && (
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-xl font-semibold mb-2">Complete Your Payment</h3>
          <QRCode value={upiLink} size={180} />
          <Label htmlFor="screenshot">Upload Payment Screenshot</Label>
          <Input id="screenshot" type="file" accept="image/*" onChange={handleScreenshotUpload} />
          {screenshot && <img src={URL.createObjectURL(screenshot)} alt="Payment Screenshot" className="rounded-lg border shadow-md w-56 mt-4" />}
          {(errors as any).screenshot && <p className="text-destructive text-sm">{(errors as any).screenshot}</p>}
          <Button variant="outline" onClick={handlePaymentSubmit}><Upload className="mr-2" /> Submit Proof</Button>
        </div>
      )}

      {stage === "final" && (
        <div className="flex flex-col items-center space-y-4 w-full">
          <p className="text-sm text-muted-foreground text-center">Click the button below to complete registration via Luma:</p>
          <div onClick={() => setLumaClicked(true)}>
            <LumaCheckoutButton />
          </div>
        </div>
      )}

      {stage === "thankyou" && (
        <div className="text-center mt-6 p-4 bg-blue-600 rounded-lg">
          <h3 className="text-lg font-semibold">Thank You!</h3>
          <p className="text-sm">Your registration is complete.</p>
        </div>
      )}
    </div>
  );
};
