import { v4 as uuidv4 } from 'uuid';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { encodeSlug } from '../hooks/useFriendlyURL';
import { Product } from '../types/productType';

interface ProductListContextType {
  products: Product[] | undefined;
  status: number;
}

interface ProductListContextProviderProps {
  children: ReactNode;
}

export const ProductListContext = createContext({} as ProductListContextType);

export function ProductListContextProvider({ children }: ProductListContextProviderProps) {
  const [products, setProducts] = useState<Product[] | undefined>()
  const [status, setStatus] = useState<number>(404)

  useEffect(() => {
    (async function getProducts() {
      try {
        const response = await fetch('https://5f184aca7c06c900160dcd19.mockapi.io/api/v1/catalog')
        const data = await response.json()
        
        const formattedProducts = data?.products.map((product: Product) => {
          const id = uuidv4()
          const slug = encodeSlug(product.name);

          return {
            ...product,
            id,
            slug
          }
        })

        setProducts(formattedProducts)
        setStatus(200)
  
      } catch (error) {
        console.log(error);
        setStatus(404);
      }
    })()
  }, [])

  return(
    <ProductListContext.Provider value={{ products, status }}>
      {children}
    </ProductListContext.Provider>
  );
}