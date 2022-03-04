import React from "react";
import { Button, Component } from "../src/component/style";

function Div({ closeModel, data }) {
  return (
    <>
      <Component className="modal">
        <button onClick={() => closeModel(false)}>X</button>
        <input type="text" defaultValue={data.id} /> <br />
        <input type="text" defaultValue={data.title} />
        <br />
        <input type="text" defaultValue={data.description} />
        <br />
        <Button>Update</Button>
      </Component>
    </>
  );
}
export default Div;
