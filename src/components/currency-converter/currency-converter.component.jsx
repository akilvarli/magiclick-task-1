import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  ConvertToForm,
  CurrencyConverterContainer,
  HandleSwap,
  SelectBox,
} from "./currency-converter.styles";

const CurrencyConverter = () => {
  const [initialState, setState] = useState({
    currencies: ["TRY", "USD", "EUR", "GBP", "JPY", "DKK", "NOK"],
    base: "TRY",
    amount: "",
    convertTo: "USD",
    result: "",
    date: "",
  });

  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyconvertTor = async () => {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?base=${base}`
        );
        console.log("response==>", response);
        const date = response.data.date;
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        setState({
          ...initialState,
          result,
          date,
        });
      };
      getCurrencyconvertTor();
    }
  }, [amount, base, convertTo, date]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };

  return (
    <CurrencyConverterContainer>
      <h4 className="text-white text-center">Döviz Çevir</h4>
      <ConvertToForm>
        <div className="inputGroup">
          <input
            type="text"
            inputMode="numeric"
            pattern="^\d*(\.\d{0,2})?$"
            value={amount}
            onChange={onChangeInput}
          />
          <SelectBox>
            <select name="base" onChange={handleSelect} value={base}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </SelectBox>
        </div>
      </ConvertToForm>

      <HandleSwap onClick={handleSwap}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#FFF" fillRule="nonzero">
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M23.031 8.157c.513 0 .936.387.994.884l.006.116v11.925l2.293-2.292c.36-.36.928-.388 1.32-.083l.095.083c.36.36.388.928.083 1.32l-.083.095-4 4c-.36.36-.928.388-1.32.083l-.095-.083-4-4c-.39-.391-.39-1.024 0-1.415.36-.36.928-.388 1.32-.083l.095.083 2.292 2.292V9.157c0-.512.386-.935.884-.993l.116-.007zM8.387 8.21c.392-.305.96-.278 1.32.083l4 4 .083.094c.305.392.278.96-.083 1.32l-.094.083c-.392.305-.96.278-1.32-.083L10 11.415V23.34l-.007.117c-.057.497-.48.883-.993.883l-.117-.007c-.497-.057-.883-.48-.883-.993V11.415l-2.293 2.292-.094.083c-.392.305-.96.278-1.32-.083-.39-.39-.39-1.024 0-1.414l4-4z"
                        transform="translate(-1133 -258) translate(1021 103) translate(20 80) translate(84 67) translate(8 8)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </HandleSwap>

      <ConvertToForm>
        <div className="inputGroup">
          <input
            readOnly
            value={
              amount === "" ? "0" : result === null ? "Calculating..." : result
            }
          />
          <SelectBox>
            <select
              name="convertTo"
              onChange={handleSelect}
              value={convertTo}
              style={{ backgroundImage: "none" }}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </SelectBox>
        </div>
      </ConvertToForm>
    </CurrencyConverterContainer>
  );
};

export default CurrencyConverter;
