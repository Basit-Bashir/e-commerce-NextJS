import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData(category) {
  const query = `*[_type=='product' && category->name=='${category}']{
    _id,
      "imageUrl":images[0].asset->,
      price,name,'slug':slug.current,"categoryName":category->name
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Category({ params }) {
  const data = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products for {params.category}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product, id) => (
            <div key={id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-black">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-semibold text-black">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
