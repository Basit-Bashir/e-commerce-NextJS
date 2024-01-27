import AddToCart from "@/app/components/AddToCart";
import ImageGallery from "@/app/components/ImageGallery";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug) {
  const query = `*[_type=='product' && slug.current=='${slug}'][0]{
    _id,images,price,name,description,"slug":slug.current,
    "categoryName":category->name,price_id
      }`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({ params }) {
  const data = await getData(params.slug);
  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images} />
            <div className="md:py-8">
              <div className="mb-2 md:mb-4">
                <span className="mb-1 inline-block text-black">
                  {data.categoryName}
                </span>
                <h2 className="font-semibold lg:text-3xl text-black text-2xl">
                  {data.name}
                </h2>
              </div>
              <div className="mb-6 flex items-center gap-4 md:mb-10">
                <Button>
                  <span>4.2</span>
                  <Star className="ml-2 h-4 w-4" />
                </Button>
                <span className="text-md text-black transition duration-200">
                  56 rating
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="font-bold text-black text-2xl">
                    ${data.price}
                  </span>
                  <span className="mb-1 text-red-500 line-through font-semibold">
                    ${data.price + 30}
                  </span>
                </div>
                <span className="text-sm text-black">Incl. Vat + Shipping</span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-black">
                <Truck />
                <span className="text-sm">2-4 days shipping</span>
              </div>
              <div className="flex gap-4 ">
                <AddToCart
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                  key={data._id}
                />
                <Button variant={"secondary"}>Checkout</Button>
              </div>
              <p className="mt-12 text-base text-black tracking-wider">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
