import {Container, Profile, Logout, Input} from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useEffect } from 'react'

import { api } from '../../services/api'
import {useAuth} from '../../hooks/auth'

export function Header() {
  const {signOut, user  } = useAuth();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
   async function fetchNotes() {
    const response = await api.get(`/notes?title${search}`);
     setNotes(response.data)
   }

   fetchNotes();

  },[search]);

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
  <Container>
      <Logout to='/' >
        <h1>RocketMovies</h1>
      </Logout>

      <Input 
       placeholder='Pesquisar pelo título'
       onChange={() => setSearch(e.target.value)}
       />
       
      <div>
       <strong>{user.name}</strong>
       <span onClick={signOut}>Sair</span>
      </div>

    <Profile to="/profile">
      <img 
       src={avatarUrl} 
       alt={user.name}
      />
    </Profile>

  </Container>
  );
}