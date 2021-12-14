import Page from '../components/page.client'
import Pokemon from '../components/pokemon.client'
import Footer from '../components/footer.client'

// Utils
import { getPokemon, getPokemons } from '../lib/get-pokemons'

export async function getServerSideProps() {
  const storyIds = await getPokemons({ limit: 500, offset: 0 })
  const data = await Promise.all(
    storyIds
      .slice(0, 30)
      .map(({ id }) => getPokemon(id))
  )

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  }
}

export default function News({ data }) {
  return (
    <Page>
      <div className='pokemon-gallery'>
        {data.map((item, i) => {
          return <Pokemon key={i} {...item} />
        })}
      </div>
      <Footer />
    </Page>
  )
}
