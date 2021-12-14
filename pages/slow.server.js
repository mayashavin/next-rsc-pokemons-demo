import { Suspense } from 'react'

// Shared Components
import Spinner from '../components/spinner'

// Server Components
import SystemInfo from '../components/server-info.server'

// Client Components
import Page from '../components/page.client'
import Pokemon from '../components/pokemon.client'
import Footer from '../components/footer.client'

// Utils
import { getPokemon, getPokemons } from '../lib/get-pokemons'
import useData from '../lib/use-data'

function PokemonWithData({ id }) {
  const data = useData(`s-${id}`, () => getPokemon(id))
  return <Pokemon {...data} />
}

function ListWithData() {
  const storyIds = useData('pokemons', () => getPokemons({ limit: 500, offset: 0 }))

  return (
    <div className='pokemon-gallery'>
      {storyIds.slice(0, 30).map(({ id }) => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <PokemonWithData id={id} />
          </Suspense>
        )
      })}
    </div>
  )
}

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        <ListWithData />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  )
}
