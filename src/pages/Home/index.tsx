import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import { Button } from '../../Components/Button/index'
import { Aside } from '../../Components/Aside/index'

import { PageAuth } from './styles'
import { Main } from './styles'
import { MainContent } from './styles'

import logoImg from "../../assets/images/logo.svg"
import googleIconImg from "../../assets/images/google-icon.svg"

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if(roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()) {
      alert('Room does not exists.')
      return
    }

    if(roomRef.val().endedAt) {
      alert('Room already closed.')
      return
    }

    if(user) {
      history.push(`/admin/rooms/${roomCode}`)
    } else {
      history.push(`/rooms/${roomCode}`)
    }
  }

  return (
    <PageAuth>
      <Aside />
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <button 
            className="create-room"
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input 
                type="text" 
                placeholder="Digite o código da sala"
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
            />
            <Button 
                type="submit"
                >
                Entrar na sala
            </Button>
          </form>
        </MainContent>
      </Main>
    </PageAuth>
  );
}
