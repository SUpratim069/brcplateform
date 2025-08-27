import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// IMPORTANT: Your PayPal Client ID should be stored in an environment variable.
// Create a .env file in the root of your project and add the following line:
// VITE_PAYPAL_CLIENT_ID=YOUR_CLIENT_ID

const PayPalButton = () => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const isPlaceholder = !clientId || clientId === 'YOUR_PAYPAL_CLIENT_ID_GOES_HERE';

  // If the Client ID is a placeholder, show a disabled button for layout testing.
  if (isPlaceholder) {
    return (
      <div style={{ textAlign: 'center' }}>
        <button 
          disabled 
          className="bg-yellow-400 text-black px-4 sm:px-5 py-2 sm:py-3 rounded font-semibold flex-1 sm:flex-none text-sm sm:text-base"
          style={{ opacity: 0.6, cursor: 'not-allowed' }}
        >
          Donate via PayPal
        </button>
        <p style={{ color: 'orange', fontSize: '10px', marginTop: '4px' }}>
          (Add a valid Client ID in .env to enable)
        </p>
      </div>
    );
  }

  // Otherwise, show the real, functional PayPal button.
  const initialOptions = {
    clientId: clientId,
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: "horizontal", color: 'gold', shape: 'rect', label: 'paypal', tagline: false }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", // Default donation amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Donation successful! Thank you, " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
