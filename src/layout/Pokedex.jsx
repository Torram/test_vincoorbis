import React from "react";
import "./pokedex.css";
import RightLayout from "./RightLayout";
import LeftLayout from "./LeftLayout";

export default function Pokedex() {
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
      <div className="row h-100 border d-flex pb-4">
        <div className="col border-end h-100">
          <LeftLayout />
        </div>
        <div className="col h-100">
          <RightLayout />
        </div>
      </div>
    </div>
  );
}
