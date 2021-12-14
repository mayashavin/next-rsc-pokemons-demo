/* eslint-disable consistent-return */
const url = 'https://pokeapi.dev';

export const getPokemon = async (id) => {
  const { data: result } = await fetch(
    url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        query: `
          query Pokemon {
            pokemon(id: "${id}") {
              name,
              id
              avatar,
              types {
                name
                slot
              }
              color {
                light
                dark
              }
              weight {
                in_kg
              }
              height {
                in_meter
              }
              abilities {
                name
              }
              species {
                name
              }
            }
          }
        `,
      }),
    }
  ).then(res => res.json());

  return result.pokemon || {};
};

export const getPokemons = async (interval = { limit: 100, offset: 0 }) => {
  try {
    const { data: response } = await fetch(
      url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          query: `
            query Pokemons{
              pokemons(limit: ${interval.limit}, offset: ${interval.offset}) {
                results {
                  name,
                  id                  
                }
              }
            }
          `,
        }),
      }
    ).then(res => res.json());

    return response.pokemons?.results || [];
  } catch (e) {
    return [];
  }
};