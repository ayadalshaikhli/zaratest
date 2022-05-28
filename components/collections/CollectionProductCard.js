import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { formatter } from "../../utils/helpers";
import { motion } from "framer-motion";
const CollectionProductCard = ({ product }) => {
  const { handle, title } = product;
  const { compareAtPrice, priceV2 } = product.variants[0];
  //   const { altText, originalSrc } = product.node.images.edges[0].node;

  //   const price = product.node.priceRange.minVariantPrice.amount;
  //   const compare = product.node.compareAtPriceRange.minVariantPrice.amount;

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Link href={`/products/${handle}`}>
      <motion.div
        variants={stagger}
        transition={{ delay: 1.2 }}
        initial="initial"
        animate="animate"
        className=" w-40 h-80 "
      >
        <a className="group pb-8">
          <motion.div
            variants={fadeInUp}
            className="w-full overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="relative group-hover:opacity-75 h-80 md:h-96">
              {isHovering ? (
                <Image
                  src={product.images[1]}
                  alt="{product.images.edges[1].node.originalSrc.altText}"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={product.images[0]}
                  alt="{product.images.edges[0].node.originalSrc.altText}"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </motion.div>
          <div className="flex mt-2 flex-col sm:flex-row justify-between">
            <motion.h3
              variants={fadeInUp}
              className=" text-sm font-medium text-gray-900 uppercase truncate"
            >
              {title}
            </motion.h3>
            <div className="flex text-sm  ">
              <motion.p
                variants={fadeInUp}
                className=" pr-2 text-red-700 line-through"
              >
                {formatter.format(compareAtPrice)}
              </motion.p>
              <motion.p variants={fadeInUp} className=" text-gray-500">
                {formatter.format(priceV2.amount)}
              </motion.p>
            </div>
          </div>
        </a>
      </motion.div>
    </Link>
  );
};

export default CollectionProductCard;
