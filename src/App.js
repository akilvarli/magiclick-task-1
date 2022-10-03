import React from 'react';
import "./App.css";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import CurrencyButtonContainer from "./components/CurrencyButton/currency-button.component";
import Markets from "./components/markets/markets.component";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="mt-1">Piyasalar</h1>
      <div className="row">
        <div className="col-md-6 col-lg-8 col-sm-12">
          <Markets />
        </div>
        <div className="col-md-12 col-lg-4">
          <CurrencyConverter />
        </div>
        <CurrencyButtonContainer />
      </div>
    </div>
  );
}

export default App;
