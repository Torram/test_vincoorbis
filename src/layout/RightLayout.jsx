import Collections from "@/collections/Collections";
import Graph from "@/graph/Graph";
import useCollection from "@/hooks/useCollection";
import { useEffect, useState } from "react";

export default function RightLayout({ selectCollection }) {
  const { createCollection } = useCollection();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const localCollections = localStorage.getItem("collections");
    if (localCollections === undefined) {
      setCollections([]);
      localStorage.setItem("collections", JSON.stringify([]));
    }
    if (JSON.stringify(collections) !== localCollections) {
      setCollections(JSON.parse(localCollections));
    }
  }, [collections]);

  function newCollection() {
    const collections = createCollection();
    setCollections(collections);
  }

  return (
    <div className="mh-75 h-75 pb-5" name="rightLayout">
      <div className="card align-items-center bg-light mt-2">
        <div className="card-header w-100 d-flex justify-content-between">
          <b>Tus Colecciones</b>
          <button
            type="button"
            className="btn btn-success"
            onClick={newCollection}
          >
            +
          </button>
        </div>
      </div>
      <div className="bg-light card h-50 overflow-y-auto overflow-x-hidden">
        <Collections
          collections={collections}
          selectCollection={selectCollection}
        />
      </div>
      <div className="card mt-2">
        <div className="card-header text-center">
          <b>Gráfica</b>
        </div>
      </div>
      <div className="bg-light card h-50">
        <Graph collections={collections ?? []} />
      </div>
    </div>
  );
}
