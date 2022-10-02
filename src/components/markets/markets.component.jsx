import React from "react";
import { ConvertCurrencyCard, MarketsContainer } from "./markets.styles";
import UsdFlag from "../../images/usd-flag.png";
import JapanFlag from "../../images/japan-flag.png";
import EnglandFlag from "../../images/england-flag.png";
import DenmarkFlag from "../../images/denmark-flag.png";
import NorwayFlag from "../../images/norway-flag.png";
import EuropeFlag from "../../images/europe-flag.png";

const Markets = () => {
  return (
    <MarketsContainer className="row">
      <ConvertCurrencyCard className="col-md-6">
            <div className="card-mini d-inline-flex">
              <div className="flag">
                <img src={UsdFlag} alt="" />
              </div>
              <div className="d-block">
                <h5>USD</h5>
                <span>Amerikan Doları</span>
              </div>
            </div>
            <div className="d-block give">
              <span>ALIŞ</span>
              <h6>6.8399</h6>
            </div>
            <div className="d-block">
              <span>SATIŞ</span>
              <h6>6.8752</h6>
            </div>
      </ConvertCurrencyCard>
    </MarketsContainer>
  );
};

export default Markets;
