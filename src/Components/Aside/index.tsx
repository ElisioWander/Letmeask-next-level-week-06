import { ReactNode } from 'react'

import { AsideStyled } from './styles'

import illustrationImg from '../../assets/images/illustration.svg'

type AsideProps = {
  children?: ReactNode
}

export function Aside({ children } : AsideProps) {
    return (
        <AsideStyled>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>

        <div>
          { children }
        </div>
      </AsideStyled>
    )
}