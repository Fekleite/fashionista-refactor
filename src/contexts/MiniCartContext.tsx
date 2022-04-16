import { createContext, ReactNode, useState } from 'react';

import { ProductType } from '../types/productType';

interface MiniCartProductType extends ProductType {
  amount: number;
  selectedSku?: string;
}

interface MiniCartContextType {
  miniCartProducts: MiniCartProductType[];
  addProduct: (newProduct: MiniCartProductType) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (id: string, amount: number) => void;
}

interface MiniCartContextProviderProps {
  children: ReactNode;
}

export const MiniCartContext = createContext({} as MiniCartContextType);

export function MiniCartContextProvider({ children }: MiniCartContextProviderProps) {
  const [miniCartProducts, setMiniCartProducts] = useState<MiniCartProductType[]>([]);

  function addProduct(newProduct: MiniCartProductType) {
    console.log(newProduct)
    const newProducts = [
      ...miniCartProducts,
      newProduct
    ]

    setMiniCartProducts(newProducts);
  }

  function deleteProduct(id: string) {
    const filteredProducts = miniCartProducts.filter(item => item.id !== id);

    setMiniCartProducts(filteredProducts);
  }

  function updateProduct(id: string, amount: number) {
    const updatedProducts = miniCartProducts.map(item => {
      if(item.id === id) {
        return {
          ...item,
          amount
        };
      }

      return item;
    })

    setMiniCartProducts(updatedProducts);
  }

  return(
    <MiniCartContext.Provider value={{ miniCartProducts, addProduct, deleteProduct, updateProduct }}>
      {children}
    </MiniCartContext.Provider>
  );
}