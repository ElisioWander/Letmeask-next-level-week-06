import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'
import { database } from '../../services/firebase'

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
        >
            <button type="button" onClick={handleEndRoom} >Shut down room</button>
        </Modal>
    )
}