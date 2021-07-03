import { ReactNode } from 'react'
import { RoomCode } from '../RoomCode'

import { HeaderStyled } from './styles'

import logoImg from '../../assets/images/logo.svg'


type RoomProps = {
    code: string
    children: ReactNode
}


export function Header({ code, children }: RoomProps ) {
    return (
        <HeaderStyled>
            <div className="content">
                <a href="/"><img src={logoImg} alt="Letmeask" /></a>
                <div>
                    <RoomCode code={code} />
                    <div>
                        { children }
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}