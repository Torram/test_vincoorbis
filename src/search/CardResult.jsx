import TypeTag from "@/common/TypeTag";
import Image from "next/image";
import notFound from "../../public/notFound.svg";
import useCollection from "@/hooks/useCollection";
import { useState } from "react";

export default function CardResult({ pokemon, updateCollection }) {
  const { newPokemon } = useCollection();
  const [value, setValue] = useState(0);
  const types = pokemon.types.map((type) => type.type.name);
  function addPokemon() {
    newPokemon({ ...pokemon, quantity: value });
    updateCollection();
  }

  function handleChangeInput(e) {
    setValue(e.target.value);
  }

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
        <div className="col text-center">
          <p className="mb-0">Cantidad:</p>
          <div>
            <input
              type="text"
              className="w-25 m-1 text-center"
              value={value}
              onChange={handleChangeInput}
            />
            <button className="btn btn-primary p-1" onClick={addPokemon}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
