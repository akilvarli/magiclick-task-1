import "./App.css";
import CurrencyConverter from "./components/currency-converter/currency-converter.component";
import Markets from "./components/markets/markets.component";

function App() {
  return (
    <div className="container mt-3">
      <h1 className="mt-1">Piyasalar</h1>
      <div className="row">
        <div className="col-md-6 col-lg-8 col-sm-12">
          <Markets /> 
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
}

export default App;
