import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import {FiArrowLeft} from "react-icons/fi"
import {Textarea} from "../../components/Textarea"
import {Bookmarks} from "../../components/Bookmarks"
import {ButtonNewMovieBlack} from "../../components/ButtonNewMovieBlack"
import {ButtonNewMoviePink} from "../../components/ButtonNewMoviePink"
import {Section} from "../../components/Section"

import {Container, Form,} from "./styles"
import { Link } from "react-router-dom"

import { api } from "../../services/api"


export function NewMovie() {
  const [title, setTitle] = useState("")
  const [result, setResult] = useState("")
  const [description, setDescription] = useState("")
  
  const [ movie_tags, setTag] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();
  
  function handleAddTag() {
    setTag(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
   setTag(prevState => prevState.filter(tags => tags  !==  deleted));
  }

  async function handleNewNote(){
    
    if(!title) {
      return alert("Digite o título da nota")
    }


    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio  ");
    }
      
   await api.post("/notes",{
    title,  
    description,
    movie_tags,
    rating: result
   });

   alert("Nota criada com sucesso!");
   navigate("/");
  }

  return (
   <Container>
    <Header/>
    <main>
      <Form>

       <header>
         <FiArrowLeft/>
        <Link to="/"
        href="">Voltar
        </Link>
        <h1>Novo filme</h1>
       </header>
        
      <div className="input">
       <div>
        <input  
         type="text" 
         placeholder="Título"
         onChange={e => setTitle(e.target.value)}
        />
       </div>

       <div>
        <input  
         type="text" 
         placeholder="Sua nota (de 0 a 5)"
         onChange={e => setResult(e.target.value)}
        />
       </div>
      </div>
       
        <Textarea 
         placeholder='Observação'
         onChange={e => setDescription(e.target.value)}
        />
         
        <Section title="Marcadores">  
        <div className="tags">
          {
            movie_tags.map((movie_tags, index) => (
              <Bookmarks 
               key={String(index)}
               value={movie_tags}
               onClick={() => handleRemoveTag(movie_tags)}
              />
            ))  
         }

          <Bookmarks 
           isNew 
           placeholder = "Novo"
           onChange={e => setNewTag(e.target.value)}
           value={newTag}
           onClick={handleAddTag}
          />
        </div>
        </Section>
         
         
          <div className="button">
           <ButtonNewMovieBlack title= "Excluir Filmes" />
            <ButtonNewMoviePink  
             title= "Salvar alteração" 
             onClick={handleNewNote}
            />
          </div>
         
      </Form>
    </main>

   </Container>
  )
}