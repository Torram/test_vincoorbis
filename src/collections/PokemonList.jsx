import Card from "./Card";

export default function PokemonList({ list, updateCollection }) {
  return (
    <div className="w-100 h-100 overflow-x-hidden">
      {list?.map((e, i) => {
        return <Card key={i} pokemon={e} updateCollection={updateCollection} />;
      })}
    </div>
  );
}
