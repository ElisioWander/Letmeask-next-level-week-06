import Modal from 'react-modal'
import { database } from '../../services/firebase'

import { Container } from '../../styles/modal-styles'

import deleteModalImg from '../../assets/images/delete-modal.svg'

type DeleteQuestionModalProps = {
    question: string
    roomId: string,
    isOpen: boolean,
    onRequestClose: () => void
}

export function DeleteQuestionModal({ question, roomId, isOpen, onRequestClose } : DeleteQuestionModalProps) {
    const questionId = question

    async function handleDeleteQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()

        onRequestClose()
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
            <Container>
                <div>
                    <img src={deleteModalImg} alt="Deletar pergunta" />
                    <h2>Excluir pergunta</h2>
                    <p>Tem certeza que você deseja excluir esta pergunta?</p>
                </div>
                <button type="button" onClick={onRequestClose} >Cancelar</button>
                <button type="button" onClick={() => handleDeleteQuestion(questionId)}>Sim</button>
            </Container>
        </Modal>
    )
}