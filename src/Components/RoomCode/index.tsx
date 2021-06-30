import copyImg from '../../assets/images/copy.svg'

import { RoomCodeButton } from './styles'

type RoomCodeProps = {
    code: string
}

export function RoomCode({ code }: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <RoomCodeButton onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy imagem" />
            </div>
            <span>Sala {code}</span>
        </RoomCodeButton>
    )
}