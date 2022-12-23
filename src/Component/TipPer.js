import React from "react";

function TipPer({item, index, perPerson}) {
  return (
    <div>
      <button className="btnTipPer" onClick={() => perPerson(index)}>
        {item}%
      </button>
    </div>
  );
}

export default TipPer;
