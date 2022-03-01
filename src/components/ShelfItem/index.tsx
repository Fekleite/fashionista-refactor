import { Link } from 'react-router-dom';

import ImageNotFound from '../../assets/image-not-found.jpg';
import { Product } from '../../types/productType';

import { Container, Stack, PriceContainer } from './style';

interface ShelfItemProps {
  product: Product;
}

export default function ShelfItem({ product }: ShelfItemProps) {
  return(
    <Container>
      <Link to={`/${product.slug}/p`}>
        <Stack>
          {product.on_sale && (<span>{product.discount_percentage}</span>)}

          {product.image === "" ? (
            <img src={ImageNotFound} alt="" />
          ) : (
            <img src={product.image} alt="" />
          )}
        </Stack>

        <h4>{product.name}</h4>

        <PriceContainer>
          {product.actual_price !== product.regular_price ? (
            <>
              <span>{product.regular_price}</span>
              <strong>{product.actual_price}</strong>
            </>
          ) : (
            <strong>{product.regular_price}</strong>
          )}
        </PriceContainer>
      </Link>
    </Container>
  )
}