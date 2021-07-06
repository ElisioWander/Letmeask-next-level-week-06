import { ReactNode } from 'react'
import { BiArrowBack } from 'react-icons/bi'

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
                <a href="/"><BiArrowBack /><img src={ logoImg } alt="Logo" /></a>
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