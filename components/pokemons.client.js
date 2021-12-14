import Pokemon from './pokemon.client'

export default ({ pokemons, page = 1, offset = null }) => (
  <div className="pokemon-gallery">
    {pokemons.map((pokemon, i) => (
      <div key={pokemon.id} className="pokemon-gallery">
        {null != offset ? (
          <span className="count">{i + offset + 1}</span>
        ) : null}
        <Pokemon {...pokemon} />
      </div>
    ))}
  </div>
)
