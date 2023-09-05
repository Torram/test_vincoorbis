"use client";
import React, { useEffect, useState } from "react";
import "./pokedex.css";
import RightLayout from "./RightLayout";
import LeftLayout from "./LeftLayout";
import Collection from "@/collections/Collection";

export default function Pokedex() {
  const [showCollection, setShowCollection] = useState(false);
  const [activeCollection, setActiveCollection] = useState({});

  function handleBackButton() {
    setActiveCollection({});
    setShowCollection(false);
    localStorage.setItem("activeCollection", 0);
  }
  function handleSelectCollection(collection) {
    setActiveCollection(collection);
    setShowCollection(true);
    localStorage.setItem("activeCollection", collection.id);
  }
  function handleUpdateCollection() {
    const collections = JSON.parse(localStorage.getItem("collections"));
    const collection = collections.find((coll) => {
      return coll.id === activeCollection.id;
    });
    setActiveCollection(collection);
  }
  return (
    <div className="container text-white bg-danger h-100 overflow-y-hidden">
      <div className="row border-bottom">
        <div className="col border-end">
          <div className="row m-3">
            <div className="col ">
              <div className="big-circle blue" />
            </div>
            <div className="col">
              <div className="circle red" />
            </div>
            <div className="col">
              <div className="circle yellow" />
            </div>
            <div className="col">
              <div className="circle green" />
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row h-100 border pb-4">
        <div className="col border-end h-100">
          <LeftLayout
            activeCollection={activeCollection}
            updateCollection={handleUpdateCollection}
          />
        </div>
        <div className="col h-100">
          {!showCollection && (
            <RightLayout selectCollection={handleSelectCollection} />
          )}
          {showCollection && (
            <Collection
              collection={activeCollection}
              back={handleBackButton}
              updateCollection={handleUpdateCollection}
            />
          )}
        </div>
      </div>
    </div>
  );
}
