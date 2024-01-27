"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

export default function ImageGallery({ images }) {
  const [bigImage, setBigImage] = useState(images[0]);

  function handleSmallImage(image) {
    setBigImage(image);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, id) => (
          <div key={id} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              priority
              alt="post"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="big image"
          priority
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-4 py-2 text-md uppercase tracking-widest text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
