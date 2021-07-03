import { useParams } from "react-router-dom"
import { useState } from 'react'

import { useRoom } from "../../hooks/useRoom"
import { database } from "../../services/firebase"

import { Question } from "../../Components/Question/index"
import { Header } from "../../Components/Header/index"
import { Button } from "../../Components/Button"
import { DeleteQuestionModal } from "../../Components/DeleteQuestionModal"
import { ShutRoomModal } from "../../Components/ShutRoomModal"

import { PageRoom } from "./styles";
import { Main } from "./styles";

import deleteImg from "../../assets/images/delete.svg"
import answerImg from "../../assets/images/answer.svg"
import checkImg from "../../assets/images/check.svg"

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth()
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  const [isDeleteQuestionModal, setIsDeleteQuestionModal] = useState(false)
  const [isShutRoomModal, setIsShutRoomModal] = useState(false)

  function handleOpenDeleteQuestionModal() {
    setIsDeleteQuestionModal(true)
  }

  function handleCloseDeleteQuestionModal() {
    setIsDeleteQuestionModal(false)
  }

  function handleOpenShutRoomModal() {
    setIsShutRoomModal(true)
  }

  function handleCloseShutRoomModal() {
    setIsShutRoomModal(false)
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <PageRoom>
      <Header code={roomId}>
        <div className="close-room-button">
          <Button isOutlined onClick={handleOpenShutRoomModal}>
            Encerrar sala
          </Button>

          <ShutRoomModal
            roomId={roomId}
            isOpen={isShutRoomModal}
            onRequestClose={handleCloseShutRoomModal}
            />
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length === 1 ? (
            <span>{questions.length} pergunta</span>
          ) : (
            <span>{questions.length} perguntas</span>
          )}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={handleOpenDeleteQuestionModal} 
                >
                  <img src={deleteImg} alt="deletar imagem" />
                </button>
                
                <DeleteQuestionModal
                    question={question.id}
                    roomId={roomId}
                    isOpen={isDeleteQuestionModal}
                    onRequestClose={handleCloseDeleteQuestionModal}
                />

              </Question>
            )
          })}
        </div>
      </Main>
    </PageRoom>
  )
}
