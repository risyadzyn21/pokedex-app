import api from '../../services/api'
import {useEffect, useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

function PokemonList() {
  const [items, setItems] = useState(0)
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    api.get(`/pokemon?offset=${items}&limit=100`)
    .then(res => {
      setPokemons(res.data.results)
    })
  },[])

  return (
    <div className='poke-container'>
      {pokemons.sort((a, b) => a.name.localeCompare(b.name)).map(pokemon => {
        return (
          <div key={pokemon.name} className='poke-list'>
            <div className='poke-name'>{pokemon.name}</div>
          </div>
        )
      })}  
    </div>
  )
}

export default PokemonList
