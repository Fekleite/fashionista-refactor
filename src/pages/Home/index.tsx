import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ShelfItem from "../../components/ShelfItem";

import { useProducts } from "../../hooks/useProducts";

import { Container } from "./style";

export default function Home() {
  const { products } = useProducts();

  return (
    <Container>
      <Header />

      <div>
        <ul>
          {products?.map(product => (
            <ShelfItem product={product} key={product.id}/>
          ))}
        </ul>
      </div>

      <Footer />
    </Container>
  );
}