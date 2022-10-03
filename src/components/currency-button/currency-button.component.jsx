import React from "react";
import { AboutButton, CustomButton } from "./currency-button.styles";

const CurrencyButtonContainer = () => {
  return (
    <div className="row">
      <AboutButton className="col-md-4 col-lg-5">Detaylı Bilgi</AboutButton>
      <CustomButton className="col-md-4 col-lg-5">Tüm Piyasalar</CustomButton>
    </div>
  );
};

export default CurrencyButtonContainer;
