import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'
import {
  HeaderDescriptionContainer,
  HeaderHighlights,
  HeaderItemHighlight,
} from './styles'

export function HeaderDescription() {
  return (
    <HeaderDescriptionContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>
      <HeaderHighlights>
        <div>
          <HeaderItemHighlight variant={'yellow-dark'}>
            <ShoppingCart size={32} weight="fill" />
            Compra simples e segura
          </HeaderItemHighlight>
          <HeaderItemHighlight variant={'yellow'}>
            <Package size={32} weight="fill" />
            Embalagem mantém o café intacto
          </HeaderItemHighlight>
        </div>
        <div>
          <HeaderItemHighlight variant={'base-text'}>
            <Timer size={32} weight="fill" />
            Entrega rápida e rastreada
          </HeaderItemHighlight>
          <HeaderItemHighlight variant={'purple'}>
            <Coffee size={32} weight="fill" />O café chega fresquinho até você
          </HeaderItemHighlight>
        </div>
      </HeaderHighlights>
    </HeaderDescriptionContainer>
  )
}
