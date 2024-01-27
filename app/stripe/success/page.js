import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function StripeSuccess() {
  return (
    <div className="h-screen ">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-500 w-24 h-24 mx-auto my-6" />
        <div className="text-center ">
          <h3 className="md:text-2xl text-base text-gray-900 font-bold">
            Payment successfull..!
          </h3>
          <p className="text-gray-600 my-4">
            Thank You for your Purchase we hope you enjoyed..!
          </p>
          <p>Have a great day😊</p>
          <Button asChild className="mt-4">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
