import React, { useEffect, useState } from "react";
import { ConvertCurrencyCard, MarketsContainer } from "./markets.styles";
import UsdFlag from "../../images/usd-flag.png";
import JapanFlag from "../../images/japan-flag.png";
import EnglandFlag from "../../images/england-flag.png";
import DenmarkFlag from "../../images/denmark-flag.png";
import NorwayFlag from "../../images/norway-flag.png";
import EuropeFlag from "../../images/europe-flag.png";
import axios from "axios";

const Markets = () => {
  const [initialState, setState] = useState({
    currencies: ["TRY", "USD", "EUR", "GBP", "JPY", "DKK", "NOK"],
    base: "TRY",
    amount: 1,
    convertTo: "USD",
    result: "",
    date: "",
  });

  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");
  const [gbp, setGbp] = useState("");
  const [jpy, setJpy] = useState("");
  const [dkk, setDkk] = useState("");
  const [nok, setNok] = useState("");

  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    const getCurrency = async () => {
      const response = await axios.get(
        `https://api.exchangerate.host/latest?base=${base}&symbols=${currencies}`
      );
      console.log("kur ==>", response);
      const rates = response.data.rates;
      // const result = (response.data.rates[convertTo] * amount).toFixed(3);
      console.log(result);

      // Calculate Currency for TRY
      setDkk(amount / rates.DKK);
      setUsd(amount / rates.USD);
      setNok(amount / rates.NOK);
      setGbp(amount / rates.GBP);
      setJpy(amount / rates.JPY);
      setEur(amount / rates.EUR);

      setState({
        ...initialState,
        result,
        date,
      });
    };
    getCurrency();
  }, [amount, base, convertTo, date]);

  return (
    <>
      <h1 className="text-md-center text-lg-left text-sm-center">Piyasalar</h1>
      <MarketsContainer className="row">
        <ConvertCurrencyCard className="col-md-5">
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
            <span className="curr">ALIŞ</span>
            <h6>{usd.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{usd.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
        <ConvertCurrencyCard className="col-md-5 right-card">
          <div className="card-mini d-inline-flex">
            <div className="flag">
              <img src={EuropeFlag} alt="" />
            </div>
            <div className="d-block">
              <h5>EUR</h5>
              <span style={{ width: "99px" }}>Avrupa Para Birimi</span>
            </div>
          </div>
          <div className="d-block give">
            <span className="curr">ALIŞ</span>
            <h6>{eur.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{eur.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
        <ConvertCurrencyCard className="col-md-5 ">
          <div className="card-mini d-inline-flex">
            <div className="flag">
              <img src={JapanFlag} alt="" />
            </div>
            <div className="d-block">
              <h5>JPY</h5>
              <span>Japon Yeni</span>
            </div>
          </div>
          <div className="d-block give">
            <span className="curr">ALIŞ</span>
            <h6>{jpy.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{jpy.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
        <ConvertCurrencyCard className="col-md-5 right-card">
          <div className="card-mini d-inline-flex">
            <div className="flag">
              <img src={EnglandFlag} alt="" />
            </div>
            <div className="d-block">
              <h5>GBP</h5>
              <span>İngiliz Sterlini</span>
            </div>
          </div>
          <div className="d-block give">
            <span className="curr">ALIŞ</span>
            <h6>{gbp.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{gbp.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
        <ConvertCurrencyCard className="col-md-5 bottom-card">
          <div className="card-mini d-inline-flex">
            <div className="flag">
              <img src={DenmarkFlag} alt="" />
            </div>
            <div className="d-block">
              <h5>DKK</h5>
              <span style={{ width: "99px" }}>Danimarka Konu</span>
            </div>
          </div>
          <div className="d-block give">
            <span className="curr">ALIŞ</span>
            <h6>{dkk.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{dkk.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
        <ConvertCurrencyCard className="col-md-5 bottom-card-right">
          <div className="card-mini d-inline-flex">
            <div className="flag">
              <img src={NorwayFlag} alt="" />
            </div>
            <div className="d-block">
              <h5>NOK</h5>
              <span>Norveç Konu</span>
            </div>
          </div>
          <div className="d-block give">
            <span className="curr">ALIŞ</span>
            <h6>{nok.toString().substring(0, 7)}</h6>
          </div>
          <div className="d-block">
            <span className="curr">SATIŞ</span>
            <h6>{nok.toString().substring(0, 7)}</h6>
          </div>
        </ConvertCurrencyCard>
      </MarketsContainer>
    </>
  );
};

export default Markets;
