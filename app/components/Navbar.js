"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();
  const path = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl text-2xl font-bold">
            North<span className="text-primary">-Commerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              {path === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            variant={"outline"}
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="text-xs hidden font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
