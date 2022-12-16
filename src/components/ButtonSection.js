import React, { useContext } from "react";
import { Context } from "./Provider";

export default function ButtonSection() {
  const { setName } = useContext(Context);

  return (
    <div className="buttonSection">
      <button type="button" className="button" onClick={setName("Filip")}>
        GitHub
      </button>
      <button type="button" className="button" onClick={setName("filMarzec")}>
        LinkedIn
      </button>
    </div>
  );
}
