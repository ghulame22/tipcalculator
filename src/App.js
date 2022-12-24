import { useState } from "react";
import "./App.css";
import TipPer from "./Component/TipPer";

function App() {
  const tipPer = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [coustomInput, setCoustomInput] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const perPerson = (index) => {
    let count = bill / noOfPeople;
    let tipPerAmount = (count * tipPer[index]) / 100;
    let totalPerAmount = count + tipPerAmount;
    if (bill && noOfPeople !== "") {
      setTipAmount(Math.round(tipPerAmount * 100) / 100);
      setTotalAmount(Math.round(totalPerAmount * 100) / 100);
    }
  };

  const handleChange = (e) => {
    setCoustomInput(e.target.value);
    let count = bill / noOfPeople;
    let tipPerAmount = (count * e.target.value) / 100;
    let totalPerAmount = count + tipPerAmount;
    if (bill && noOfPeople !== "") {
      setTipAmount(Math.round(tipPerAmount * 100) / 100);
      setTotalAmount(Math.round(totalPerAmount * 100) / 100);
    }
  };

  const reset = () => {
    setTipAmount("0.00");
    setTotalAmount("0.00");
  };

  return (
    <>
      <main className="main">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="container">
          <div className="inputFlex">
            <div className="subContainer">
              <span>Bill</span>
              <label>
                <input
                  className="inputBox"
                  placeholder="0"
                  type="text"
                  value={bill}
                  onChange={(e) => setBill(() => e.target.value)}
                />
              </label>
            </div>
            <div className="subContainer">
              <span>Select tip %</span>
              <div className="tipPerFlex">
                {tipPer.map((item, index) => (
                  <TipPer
                    item={item}
                    index={index}
                    perPerson={perPerson}
                    key={index}
                  />
                ))}
                <input
                  className="tipPerCustom"
                  placeholder="Custom"
                  type="text"
                  value={coustomInput}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="subContainer" id="lowerSubCont">
              <span>Number of people</span>
              <label>
                <input
                  className="inputBox"
                  placeholder="0"
                  type="text"
                  value={noOfPeople}
                  onChange={(e) => setNoOfPeople(() => e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="output">
            <div className="subContainer2">
              <div className="tipAmount">
                <div className="tipAmountLable">
                  <div className="lable1">Tip Amount</div>
                  <div className="lable2">/ person</div>
                </div>
                <div className="tipAmountValue">${tipAmount} </div>
              </div>
              <div className="tipAmount">
                <div className="tipAmountLable">
                  <div className="lable1">Total</div>
                  <div className="lable2">/ person</div>
                </div>
                <div className="tipAmountValue">${totalAmount}</div>
              </div>
            </div>
            <div className="reset">
              <button className="btnReset" onClick={reset}>
                RESET
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
