import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/:slug/p' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}