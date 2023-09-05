"use client";
import TypeTag from "@/common/TypeTag";
import Image from "next/image";
import notFound from "../../public/notFound.svg";
import { useState } from "react";
import useCollection from "@/hooks/useCollection";

export default function Card({ pokemon, updateCollection }) {
  const [value, setValue] = useState(pokemon.quantity);
  const { subPokemon, addPokemon } = useCollection();
  const types = pokemon.types.map((type) => type.type.name);

  function handleChangeQuantity(e) {
    setValue(e.target.value);
  }
  function oneMore() {
    setValue(parseInt(value) + 1);
    addPokemon(pokemon.id);
    updateCollection();
  }
  function oneLess() {
    setValue(parseInt(value) - 1);
    subPokemon(pokemon.id);
    updateCollection();
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
            <button className="btn btn-danger p-1" onClick={oneLess}>
              -
            </button>
            <input
              type="text"
              className="w-25 m-1 text-center"
              value={value}
              onChange={(e) => handleChangeQuantity(e)}
            />
            <button className="btn btn-success p-1" onClick={oneMore}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
