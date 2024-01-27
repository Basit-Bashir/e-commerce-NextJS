"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export default function Checkout({
  currency,
  description,
  price,
  name,
  image,
  price_id,
}) {
  const { checkoutSingleItem } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  function buyNow(priceId) {
    checkoutSingleItem(priceId);
  }
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout
    </Button>
  );
}
