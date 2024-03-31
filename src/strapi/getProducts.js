import url from "./URL.js";

export default async () => {
  return [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      image: "product-1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Product 2",
      price: 29.99,
      image: "/assets/product-images/product-2.png",
      featured: false,
    },
    {
      id: 3,
      title: "Product 3",
      price: 39.99,
      image: "/assets/product-images/product-3.png",
      featured: true,
    },
  ];
};