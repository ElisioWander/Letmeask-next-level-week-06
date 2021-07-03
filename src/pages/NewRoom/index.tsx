import { FormEvent, useState } from 'react' 
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import { Button } from '../../Components/Button/index'
import { Aside } from '../../Components/Aside/index'

import { PageCreateNewRoom } from './styles'
import { Main } from './styles'
import { MainContent } from './styles'

import logoImg from "../../assets/images/logo.svg"

export function NewRoom() {
  const { user } = useAuth()

  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if(newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
  }

  return (
    <PageCreateNewRoom>
      <Aside />

      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input 
                type="text" 
                placeholder="Nome da sala"
                onChange={evet => setNewRoom(evet.target.value)}
                value={newRoom}
            />
            <Button 
                type="submit">
                Criar sala
            </Button>
          </form>

          <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </Main>
    </PageCreateNewRoom>
  );
}
