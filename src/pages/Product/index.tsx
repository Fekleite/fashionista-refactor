import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useProducts } from "../../hooks/useProducts";
import { ProductType } from "../../types/productType";

import ImageNotFound from '../../assets/image-not-found.jpg';

import { Container, Breadcrumb, Content, Sizes, PriceContainer } from "./style";

export default function Product() {
  const { products } = useProducts();
  const [product, setProduct] = useState<ProductType | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const { slug } = useParams();

  useEffect(() => {
    const actualProduct = products?.find(product => product?.slug === slug);

    if(actualProduct) {
      setProduct(actualProduct);
    }
  }, [products, slug])

  return (
    <Container>
      <Header />

      <div>
        <Breadcrumb>
          <Link to="/">Home</Link>
          {">"}
          <span>{product?.name}</span>
        </Breadcrumb>

        <Content>
          {product?.image === "" ? (
            <img src={ImageNotFound} alt="Produto Indisponível" />
          ) : (
            <img src={product?.image} alt={product?.name} />
          )}

          <div>
            <h2>{product?.name}</h2>

            <span>Cor: {product?.color}</span>
            
            <Sizes>
              <span>Escolha um tamanho:</span>
              <ul>
                {product?.sizes.map(size => (
                  <li key={size.sku}>
                    <input 
                      type="radio" 
                      name="productSize"
                      id={size.size} 
                      disabled={size.available}
                      ref={inputRef}
                    />
                    <label htmlFor={size.size}>
                      {size.size}
                    </label>
                  </li>
                ))}
              </ul>
            </Sizes>

            <PriceContainer>
              {product?.actual_price !== product?.regular_price ? (
                <>
                  <span>{product?.regular_price}</span>
                  <strong>{product?.actual_price}</strong>
                </>
              ) : (
                <strong>{product?.regular_price}</strong>
              )}
            </PriceContainer>

            <button>
              Adicionar a sacola
            </button>
          </div>
        </Content>
      </div>

      <Footer />
    </Container>
  );
}