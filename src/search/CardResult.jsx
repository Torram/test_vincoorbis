import TypeTag from "@/common/TypeTag";
import Image from "next/image";
import notFound from "../../public/notFound.svg";

export default function CardResult({ pokemon }) {
  console.log(pokemon);
  const types = pokemon.types.map((type) => type.type.name);
  console.log(types);
  return (
    <div className="w-100 border text-center card p-0 m-0">
      <p>{pokemon.name.toUpperCase()}</p>
      <div className="row">
        <div className="col">
          <Image
            src={pokemon.sprites.front_default || notFound}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </div>
        <div className="col">
          <div>
            Tipos:
            {types.map((type, i) => (
              <TypeTag key={i} type={type} />
            ))}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
