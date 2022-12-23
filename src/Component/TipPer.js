import React from "react";

function TipPer({item, index}) {
  return (
    <div>
      <button className="btnTipPer" key={index}>
        {item}
      </button>
    </div>
  );
}

export default TipPer;
