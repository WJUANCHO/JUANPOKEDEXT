import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemon, setPokemon] = useState()
  const [inputValue, setinputValue] = useState("pikachu")
  const [hasError, sethasError] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    const url= `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    setisLoading (true)
    axios.get(url)
       .then(res => {
        setPokemon (res.data)
        sethasError(false)
       } )
       .catch(err => 
        {
          console. log(err)
          sethasError(true)
        })
        .finally( () =>{
        setTimeout(() => setisLoading(false),100)
          
        })

  }, [inputValue])

  const handleSumit = e => {
    e.preventDefault ()
    setinputValue(e.target.namePoke.value)
    
  }
  console. log(inputValue)

  return (
    <div className="App">
       <h1>PokeDex</h1>
       <form onSubmit={handleSumit}>
        <input id='namePoke' type="text" />
        <button>Search</button>
       </form>
       <div className='card-container'>
        {
          isLoading?
          <h1> Loading...</h1>
          :
             hasError ?
             <h1>Pokemon not found 😢 </h1>
             :
             <PokemonCard pokemon={pokemon}/>
        }
       </div>
   </div> 
  )
}

export default App
