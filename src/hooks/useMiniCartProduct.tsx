import { useContext } from 'react'

import { MiniCartContext } from '../contexts/MiniCartContext'

export function useMiniCartProducts() {
  const value = useContext(MiniCartContext);

  return value;
}