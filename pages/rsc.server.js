import { Suspense } from 'react'

// Shared Components
import Skeletons from '../components/skeletons'

// Server Components
import SystemInfo from '../components/server-info.server'

// Client Components
import Page from '../components/page.client'
import Footer from '../components/footer.client'
import Pokemon from "../components/pokemon.client";

// Utils
import useData from '../lib/use-data'
import { getPokemon, getPokemons } from '../lib/get-pokemons'

function PokemonWithData({ id }) {
  const data = useData(`s-${id}`, () => getPokemon(id))
  return <Pokemon {...data}/>
}

function ListWithData() {
  const storyIds = useData('top', () => getPokemons())

  return (
    <div className='pokemon-gallery'>
      {storyIds.slice(0, 30).map(({ id }) => {
        return <PokemonWithData id={id} key={id} />
      })}
    </div>
  )
}

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Skeletons />}>
        <ListWithData />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  )
}
