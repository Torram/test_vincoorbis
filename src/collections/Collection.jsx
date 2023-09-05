import useCollection from "@/hooks/useCollection";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";

export default function Collection({ collection, back, updateCollection }) {
  const { deleteCollection } = useCollection();
  const [activeCollection, setActiveCollection] = useState(collection);

  function handleBackButton() {
    back();
  }

  function handleDeleteCollection() {
    deleteCollection(activeCollection.id);
    back();
  }
  useEffect(() => {
    setActiveCollection(collection);
  }, [collection]);

  return (
    <div className="mh-75 h-75 pb-2" name="collection">
      <div className="card mt-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleBackButton}
          >
            {"<-"}
          </button>
          <b>Colección: {collection.id}</b>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteCollection}
          >
            X
          </button>
        </div>
      </div>
      <div className="bg-light card h-100 overflow-y-auto overflow-x-hidden">
        <PokemonList
          list={activeCollection.pokemons}
          updateCollection={updateCollection}
        />
      </div>
    </div>
  );
}
