import { createContext, useState, useEffect } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
const [products, setProducts] =
  useState(productsData);
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        ...product,
        id: Date.now(),
      },
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter(
        (product) => product.id !== id
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}