export default function useCollection() {
  function createCollection() {
    let collections = JSON.parse(localStorage.getItem("collections"));
    if (collections?.length > 0) {
      collections.sort((a, b) => a.id - b.id);
      const index = collections.length - 1;
      const newId = collections[index].id + 1;
      collections.push({ id: newId, pokemons: [] });
    } else {
      collections = [{ id: 1, pokemons: [] }];
    }

    localStorage.setItem("collections", JSON.stringify(collections));
    return collections;
  }

  function deleteCollection(id) {
    const collections = JSON.parse(localStorage.getItem("collections"));
    const index = collections.findIndex((collection) => {
      collection.id === id;
    });
    collections.splice(index, 1);
    localStorage.setItem("collections", JSON.stringify(collections));
  }

  function newPokemon(pokemon) {
    const activeId = localStorage.getItem("activeCollection");
    if (activeId !== "0" && parseInt(pokemon.quantity, 10) > 0) {
      let collections = JSON.parse(localStorage.getItem("collections"));
      const activeCollection = collections.find((collection) => {
        return collection.id == activeId;
      });
      activeCollection.pokemons.push(pokemon);
      localStorage.setItem("collections", JSON.stringify(collections));
    }
  }

  function addPokemon(id) {
    const activeCollection = localStorage.getItem("activeCollection");
    const collections = JSON.parse(localStorage.getItem("collections"));
    for (const coll of collections) {
      coll.pokemons.forEach((pokemon) => {
        if (pokemon.id === id) {
          pokemon.quantity = parseInt(pokemon.quantity) + 1;
        }
      });
    }
    localStorage.setItem("collections", JSON.stringify(collections));
  }

  function subPokemon(id) {
    const activeCollection = localStorage.getItem("activeCollection");
    const collections = JSON.parse(localStorage.getItem("collections"));
    for (const coll of collections) {
      if (coll.id == activeCollection) {
        for (let i = 0; i < coll.pokemons.length; i++) {
          if (coll.pokemons[i].id === id) {
            coll.pokemons[i].quantity = parseInt(coll.pokemons[i].quantity) - 1;
          }
          if (coll.pokemons[i].quantity < 1) {
            coll.pokemons.splice(i, 1);
          }
          break;
        }
      }
      break;
    }
    localStorage.setItem("collections", JSON.stringify(collections));
  }
  return {
    createCollection,
    deleteCollection,
    newPokemon,
    addPokemon,
    subPokemon,
  };
}
