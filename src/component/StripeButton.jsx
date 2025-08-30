import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeButton = ({ plan, children }) => {
  const handleClick = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();
      if (!data.id) throw new Error("No session ID returned");

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error("Stripe checkout error:", err);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
    >
      {children}
    </button>
  );
};

export default StripeButton;




// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// // IMPORTANT: Your Stripe Publishable Key should be stored in an environment variable.
// // Add the following to your .env file:
// // VITE_STRIPE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// // TODO: Replace with your real Stripe price ID
// const priceId = 'price_1S1WIj3v6QJbLe5NskGJUTqn';

// const StripeButton = () => {
//   const isKeyMissing = !import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY.includes('YOUR_STRIPE');

//   const handleClick = async (event) => {
//     const stripe = await stripePromise;
//     const { error } = await stripe.redirectToCheckout({
//       lineItems: [{ price: priceId, quantity: 1 }],
//       mode: 'payment',
//       successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
//       cancelUrl: window.location.origin,
//     });
//     if (error) {
//       console.error("Stripe checkout error:", error);
//     }
//   };

//   if (isKeyMissing) {
//     return (
//        <div style={{ textAlign: 'center' }}>
//         <button 
//           disabled 
//           className="bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded font-semibold flex-1 sm:flex-none text-sm sm:text-base"
//           style={{ opacity: 0.6, cursor: 'not-allowed' }}
//         >
//           Donate via Stripe
//         </button>
//         <p style={{ color: '#64b5f6', fontSize: '10px', marginTop: '4px' }}>
//           (Add a valid Publishable Key in .env to enable)
//         </p>
//       </div>
//     );
//   }

//   return (
//     <button onClick={handleClick} className="bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded hover:bg-blue-700 transition font-semibold flex-1 sm:flex-none text-sm sm:text-base">
//       Donate via Stripe
//     </button>
//   );
// };

// export default StripeButton;
