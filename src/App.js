import React from "react";
import "./App.css";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import CurrencyButtonContainer from "./components/currency-button/currency-button.component";
import Markets from "./components/markets/markets.component";

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
      {/* <h1 className="mt-1">Piyasalar</h1> */}
        <div className="col-md-8 col-lg-8 col-sm-12">
          <Markets />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <CurrencyConverter />
        </div>
        <CurrencyButtonContainer />
      </div>
    </div>
  );
}

export default App;
