import React from 'react';
import { PayPalScriptProvider, usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

// This component is a wrapper for the PayPalButtons component
// It allows for a custom button to trigger the PayPal checkout flow
const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={{ layout: 'vertical', display: 'none' }} // Hide the default PayPal button
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
                // This is the key part for the custom button
                // We are creating a funding source that is not rendered
                fundingSource={undefined}
            />
        </>
    );
}

const CustomPayPalButton = () => {
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    const isPlaceholder = !clientId || clientId === 'YOUR_PAYPAL_CLIENT_ID_GOES_HERE';

    if (isPlaceholder) {
        return (
            <div style={{ textAlign: 'center' }}>
                <button
                    disabled
                    className="bg-yellow-400 text-black px-4 sm:px-5 py-2 sm:py-3 rounded font-semibold flex-1 sm:flex-none text-sm sm:text-base"
                    style={{ opacity: 0.6, cursor: 'not-allowed', height: '45px' }}
                >
                    Donate via PayPal
                </button>
                <p style={{ color: 'orange', fontSize: '10px', marginTop: '4px' }}>
                    (Add a valid Client ID in .env to enable)
                </p>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId, components: "buttons", currency: "USD" }}>
                <button 
                    onClick={() => {
                        // This is a bit of a trick: we find the hidden PayPal button and click it programmatically
                        const paypalButton = document.querySelector('[data-funding-source="paypal"]');
                        if (paypalButton) {
                            paypalButton.click();
                        }
                    }}
                    className="bg-yellow-400 text-black px-4 sm:px-5 py-2 sm:py-3 rounded font-semibold flex-1 sm:flex-none text-sm sm:text-base hover:bg-yellow-500 transition"
                    style={{ width: '100%', height: '45px' }}
                >
                    Donate via PayPal
                </button>
                <div style={{ display: 'none' }}>
                    <ButtonWrapper showSpinner={false} />
                </div>
            </PayPalScriptProvider>
        </div>
    );
}

export default CustomPayPalButton;
