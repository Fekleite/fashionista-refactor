import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import { HeaderComponent, ButtonsContainer } from './style';

export default function Header() {
  return(
    <HeaderComponent>
      <div>
        <h1>Fashionista</h1>

        <ButtonsContainer>
          <button>
            <FiSearch size={24} color="#FFF"/>
          </button>

          <button>
            <FiShoppingBag size={24} color="#FFF"/>
          </button>
        </ButtonsContainer>
      </div>
    </HeaderComponent>
  )
}