import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { plan } = req.body;

    const priceMap = {
      onetime_donation: process.env.STRIPE_PRICE_ONETIME,
      founder: process.env.STRIPE_PRICE_FOUNDER,
      citizen: process.env.STRIPE_PRICE_CITIZEN,
      ally: process.env.STRIPE_PRICE_ALLY,
    };

    const priceId = priceMap[plan];
    if (!priceId) {
      return res.status(400).json({ error: "Invalid plan" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: plan === "onetime_donation" ? "payment" : "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  } 
} 
//api