import Modal from 'react-modal'
import { AiOutlineExclamation } from 'react-icons/ai'

import { useAuth } from '../../../../hooks/useAuth'

import { Container } from '../../../../styles/modal-styles'

type RequestLogInModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export function RequereLogInModal({ isOpen, onRequestClose } : RequestLogInModalProps) {
    const { signInWithGoogle } = useAuth()

    async function handleLogInWithGoogle() {
        await signInWithGoogle().then(onRequestClose).catch(Error)
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

            <Container>
                <div>
                    <AiOutlineExclamation style={{color: "red", fontSize: 48 }} />
                    <h2>Você precisa estar logado</h2>
                    <p>Deseja fazer login?</p>
                </div>

                <button type="button" onClick={onRequestClose} >Cancelar</button>
                <button type="button" onClick={handleLogInWithGoogle} >Sim</button>
            </Container>

        </Modal>
    )
}