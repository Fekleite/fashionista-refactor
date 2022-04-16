import { ProductListContextProvider } from "./contexts/ProductListContext";
import { MiniCartContextProvider } from "./contexts/MiniCartContext";

import MyRoutes from "./routes";

import GlobalStyles from './style';

export default function App() {
  return (
    <ProductListContextProvider>
      <MiniCartContextProvider>
        <GlobalStyles />
        <MyRoutes />
      </MiniCartContextProvider>
    </ProductListContextProvider>
  );
}
