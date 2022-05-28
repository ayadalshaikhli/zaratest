import React from "react";
import CollectionCard from "./CollectionCard";
export default function CollectionList({ collections }) {
  return (
    <div className="relative product-list bg-gradient-to-t from-gray-100 to-transparent ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold text-black ">
          Our Every day Pieces
        </h1>
        <div className="grid grid-cols-1 gap-y-50 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.node.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
}
