export default function useCollection() {
  function createCollection(pokemon, value) {
    const collections = localStorage.getItem("collections");
    const collection = [];
    collection.push({ pokemon: { ...pokemon, quantity: value } });
    collections.push(collection);
    localStorage.setItem("collections", collections);
  }
  function setActiveCollection(index) {
    localStorage.setItem("activeCollection", index);
  }
  function deleteCollection(index) {
    const collections = localStorage.getItem("collections");
    collections.splice(index, 1);
  }
  function addPokemon(id) {
    const index = localStorage.getItem("activeCollection");
    const collections = localStorage.getItem("collections");
    const pokeIndex = collections[index].findIndex(
      (pokemon) => pokemon.id === id
    );
    collections[index].pokemon;
  }
  function subPokemon(id) {
    const index = localStorage.getItem("activeCollection");
    const collections = localStorage.getItem("collections");
    const pokeIndex = collections[index].findIndex(
      (pokemon) => pokemon.id === id
    );
  }
}
