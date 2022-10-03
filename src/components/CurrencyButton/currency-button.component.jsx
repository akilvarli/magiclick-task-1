import React from "react";
import { AboutButton, CustomButton } from "./currency-button.styles";

const CurrencyButtonContainer = () => {
  return (
    <div className="row">
      <AboutButton className="col-md-5 col-sm-12">Detaylı Bilgi</AboutButton>
      <CustomButton className="col-md-5 col-sm-12">Tüm Piyasalar</CustomButton>
    </div>
  );
};

export default CurrencyButtonContainer;
