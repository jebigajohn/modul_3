import { Link, useParams } from 'react-router'
import type { Pokemon } from '../types'
import { useEffect, useState } from 'react'

export default function PokemonDetailPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemon(data)
        const audio = new Audio(data.cries.legacy)
        audio.play()
      } catch (e) {
        console.error(e)
      }
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return 'Sorry, 404, Pokemon nicht gefunden'
  }
  return (
    <div className="flex gap-4 flex-col justify-center items-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-48 [image-rendering:pixelated]"
      />
      <div className="flex gap-2 flex-col justify-center items-center">
        <h1 className="text-4xl uppercase">{pokemon.name}</h1>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        {/* <audio controls src={pokemon.cries.legacy}></audio> */}
      </div>
      <div className="flex justify-between items-center w-50">
        {Number(id) > 1 && (
          <Link to={`/pokemon/${Number(id) - 1}`}>Zurück</Link>
        )}
        {Number(id) < 151 && (
          <Link to={`/pokemon/${Number(id) + 1}`}>Weiter</Link>
        )}
      </div>
    </div>
  )
}
