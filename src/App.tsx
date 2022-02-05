import { ProductListContextProvider } from "./contexts/ProductListContext";

import MyRoutes from "./routes";

import GlobalStyles from './style';

export default function App() {
  return (
    <ProductListContextProvider>
      <GlobalStyles />
      <MyRoutes />
    </ProductListContextProvider>
  );
}
