import { useState, createContext } from "react";
import PRODUCTS from "./../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProucts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
