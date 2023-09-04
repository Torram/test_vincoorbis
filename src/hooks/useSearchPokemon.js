export default function useSearchPokemon() {
  async function searchPokemon(name) {
    let result;
    await fetch("https://pokeapi.co/api/v2/pokemon-species/" + name)
      .then((response) => response.json())
      .then((json) => (result = json));

    if (result) {
      const list = [];
      for (const variety of result.varieties) {
        await fetch(variety.pokemon.url)
          .then((response) => response.json())
          .then((json) => list.push(json));
      }
      return list;
    }
  }
  return { searchPokemon };
}
