import { useEffect } from "react";
import { Button } from "@/components/ui/button";


// export const LumaCheckoutButton = () => {
//   useEffect(() => {
//     // Avoid loading the script multiple times
//     if (!document.getElementById("luma-checkout")) {
//       const script = document.createElement("script");
//       script.id = "luma-checkout";
//       script.src = "https://embed.lu.ma/checkout-button.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className="flex justify-center mt-6">
//       <a
//         href="https://luma.com/event/evt-pYG3dD55HZHwW6h"
//         className="luma-checkout--button"
//         data-luma-action="checkout"
//         data-luma-event-id="evt-pYG3dD55HZHwW6h"
//       >
//         Register for Event
//       </a>
//     </div>
//   );
// };


export const LumaCheckoutButton = () => {
  useEffect(() => {
    // Dynamically load the Luma script
    const script = document.createElement("script");
    script.id = "luma-checkout";
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://luma.com/event/evt-BmPIe2vHQbQkSjF"
      className="luma-checkout--button"
      data-luma-action="checkout"
      data-luma-event-id="evt-BmPIe2vHQbQkSjF"
    >
      Register for Event
    </a>
  );
};