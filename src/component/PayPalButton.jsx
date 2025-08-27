import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  const initialOptions = {
    clientId: clientId || "test", // fallback for sandbox testing
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="flex items-center"> {/* force vertical alignment */}
      <PayPalScriptProvider options={initialOptions}>
        <div className="h-[45px] flex items-center"> {/* match Stripe height */}
          <PayPalButtons
            style={{
              layout: "horizontal",
              color: "gold",
              shape: "rect",
              label: "donate",
              tagline: false,
              height: 45, // same as Stripe
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;
