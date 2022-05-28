import Link from "next/link";
import Image from "next/image";
import { formatter } from "/utils/helpers";
import React, { useEffect, useState } from "react";
const CollectionCard = ({ collection }) => {
  const { handle, title } = collection.node;

  //   const { altText, originalSrc } = collection.node.images.edges[0].node;

  //   const price = necklace.node.priceRange.minVariantPrice.amount;
  //   const compare = necklace.node.compareAtPriceRange.minVariantPrice.amount;
  console.log(collection);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link passHref href={`/collections/${handle}`}>
      <a className="group pb-8 mb-5">
        <div
          className="w-full bg-gray-900  overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative group-hover:opacity-75 h-80 w-full">
            <Image
              src={collection.node.image.url}
              alt="j"
              layout="fill"
              objectFit="cover"
            />
            {/* {isHovering ? (
            <Image
              src={collection.node.images.originalSrc}
              alt="j"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Image
              src={collection.node.image.originalSrc}
              alt="j"
              layout="fill"
              objectFit="cover"
            />
          )} */}
          </div>
        </div>
        <div className=" rounded-b-2xl mt-3 pt-2 h-1/3 flex flex-col justify-center">
          <h3 className=" mb-3 text-left text-xl sm:text-3xl font-mono text-black uppercase">
            {title}
          </h3>
          <p className="text-black">{collection.node.description}</p>
          <div className="flex mt- text-lg px-2">
            <p className="pr-2 text-red-700 line-through">
              {/* {formatter.format(compare)} */}
            </p>
            {/* <p className="text-gray-900">{formatter.format(price)}</p> */}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CollectionCard;
