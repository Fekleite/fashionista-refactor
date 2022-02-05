import { useContext } from 'react'

import { ProductListContext } from '../contexts/ProductListContext'

export function useProducts() {
  const value = useContext(ProductListContext);

  return value;
}