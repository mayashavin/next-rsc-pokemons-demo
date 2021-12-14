import { Suspense } from "react";

// Shared Components
import Spinner from "../components/spinner";

// Client Components
import Pokemon from "../components/pokemon.client";
import Page from "../components/page.client";

// Utils
import useData from "../lib/use-data";
import { getPokemon, getPokemons } from "../lib/get-pokemons";

function PokemonWithData({ id }) {
  const data = useData(`p-${id}`, () => getPokemon(id));

  return <Pokemon {...data} />;
}

function ListWithData() {
  const pokemons = useData('pokemons', () => getPokemons());

  return (
    <div className='pokemon-gallery'>
      {pokemons.slice(0, 30).map(({ id }) => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <PokemonWithData id={id} key={id} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default function News() {
  return (
    <Page>
      {typeof window === "undefined" ? (
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <ListWithData />
        </Suspense>
      )}
    </Page>
  );
}
