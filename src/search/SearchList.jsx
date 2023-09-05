import CardResult from "./CardResult";

export default function SearchList({
  list,
  activeCollection,
  updateCollection,
}) {
  return (
    <div className="w-100 h-100 overflow-x-hidden">
      {list.map((e, i) => {
        return (
          <CardResult
            key={i}
            pokemon={e}
            collection={activeCollection}
            updateCollection={updateCollection}
          />
        );
      })}
    </div>
  );
}
