import { createContext, ReactNode, useEffect, useState } from 'react';

interface ProductListContextType {
  products: Product[] | undefined;
  status: number;
}

interface Product {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: [
    {
      available: boolean;
      size: string;
      sku: string;
    }
  ]
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
        setProducts(data?.products)
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