import Modal from 'react-modal'
import { database } from '../../services/firebase'

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
    }


    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            
            <button type="button" onClick={()=> handleDeleteQuestion(questionId)} >Delete</button>
        </Modal>
    )
}