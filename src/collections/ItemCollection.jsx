export default function ItemCollection({ collection, select }) {
  const total = collection.pokemons.reduce((total, pokemon) => {
    return total + parseInt(pokemon.quantity);
  }, 0);

  const itemClass = `${
    collection.id % 2 === 0 ? "text-bg-secondary" : "text-bg-light"
  } border`;

  function handleCollectionSelect() {
    select(collection);
  }

  return (
    <div className={itemClass} role="button" onClick={handleCollectionSelect}>
      <div className="row">
        <div className="col text-center">
          <p>
            <b>Colección:</b> {collection.id}
          </p>
        </div>
        <div className="col text-center">
          <p>
            {" "}
            <b>No. de Especies:</b> {collection.pokemons.length}
          </p>
        </div>
        <div className="col text-center">
          <p>
            <b>Cantidad total:</b>
            {" " + total}
          </p>
        </div>
      </div>
    </div>
  );
}
