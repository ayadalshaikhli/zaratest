import React from "react";
import ProductCard from "../ProductCard";
import CollectionProductCard from "./CollectionProductCard";

export default function CollectionPageContent({ collection }) {
  console.log(collection.products);

  return (
    <div id="body" className="relative product-list mt-10 bg-gray-100/90 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold text-black ">
          {collection.title}
        </h1>
        <div className="grid  grid-cols-2 gap-y-20 md:gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-4">
          {collection.products.map((product) => (
            <CollectionProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
