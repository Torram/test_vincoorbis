import ItemCollection from "./ItemCollection";

export default function Collections({ collections, selectCollection }) {
  function select(collection) {
    selectCollection(collection);
  }

  return (
    <div className="w-100 h-100 overflow-y-auto overflow-x-hidden">
      {collections?.map((coll, i) => {
        return <ItemCollection key={i} collection={coll} select={select} />;
      })}
    </div>
  );
}
