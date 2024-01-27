"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";
export default function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://e-commerce-next-js-eosin.vercel.app/stripe/success"
      cancelUrl="https://e-commerce-next-js-eosin.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
