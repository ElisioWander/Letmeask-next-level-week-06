import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'
import { database } from '../../../../services/firebase'

import { Container } from '../../../../styles/modal-styles'

import closeRoomImg from '../../../../assets/images/close-room.svg'

type ShutRoomModalProps = {
    roomId: string,
    isOpen: boolean,
    onRequestClose: () => void
}

export function ShutRoomModal({ roomId, isOpen, onRequestClose } : ShutRoomModalProps) {
    const history = useHistory()

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
          endedAt: new Date(),
        });
    
        history.push("/");
      }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <Container>
                <div>
                    <img src={closeRoomImg} alt="Fechar sala" />
                    <h2>Encerrar sala</h2>
                    <p>Tem certeza que você deseja encerrar esta sala?</p>
                </div>

                <button type="button" onClick={onRequestClose} >Cancelar</button>
                <button type="button" onClick={handleEndRoom} >Sim</button>
            </Container>
        </Modal>
    )
}