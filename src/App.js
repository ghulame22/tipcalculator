import "./App.css";
import TipPer from "./Component/TipPer";

function App() {
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
                <input className="inputBox" placeholder="0" />
              </label>
            </div>
            <div className="subContainer">
              <span>Select tip %</span>
              <div className="tipPerFlex">
                {["5%", "10%", "15%", "25%", "50%"].map((item, index) => (
                  <TipPer item={item} index={index} />
                ))}
                <input className="tipPerCustom" placeholder="Custom" />
              </div>
            </div>
            <div className="subContainer" id="lowerSubCont">
              <span>Number of people</span>
              <input className="inputBox" placeholder="0" />
            </div>
          </div>
          <div className="output">
            <div className="subContainer2">
              <div className="tipAmount">
                <div className="tipAmountLable">
                  <div className="lable1">Tip Amount</div>
                  <div className="lable2">/ person</div>
                </div>
                <div>$</div>
              </div>
              <div className="tipAmount">
                <div className="tipAmountLable">
                  <div className="lable1">Total</div>
                  <div className="lable2">/ person</div>
                </div>
                <div>$</div>
              </div>
            </div>
            <div className="reset">
              <button className="btnReset">RESET</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
