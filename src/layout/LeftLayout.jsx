"use client";
import Alert from "@/common/Alert";
import useSearchPokemon from "@/hooks/useSearchPokemon";
import SearchList from "@/search/SearchList";
import { useState } from "react";

export default function LeftLayout() {
  const { searchPokemon } = useSearchPokemon();
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  function onChangeName(e) {
    setName(e.target.value);
  }

  async function search() {
    if (name.length > 0) {
      const results = await searchPokemon(name.toLowerCase());
      setList(results);
    } else {
      setShowAlert(true);
    }
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <div className="mh-75 h-75 pb-5" name="leftLayout">
      <div className="input-group mt-2 w-75">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Pokémon"
          aria-label="Buscar Pokémon"
          aria-describedby="search-button"
          value={name}
          onChange={(e) => onChangeName(e)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="search-button"
          onClick={search}
        >
          Buscar
        </button>
      </div>
      {showAlert && (
        <Alert msg="Nombre inválido" type="danger" onClose={handleCloseAlert} />
      )}
      <div className="card mt-3">
        <div className="card-header">Resultados</div>
      </div>
      <div className="bg-light card h-100 overflow-y-auto overflow-x-hidden">
        <SearchList list={list} />
      </div>
    </div>
  );
}
