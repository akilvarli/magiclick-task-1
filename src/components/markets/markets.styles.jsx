import styled from "styled-components";

export const MarketsContainer = styled.div`
  margin-top: 34.8px;
  h1 {
    font-family: Roboto;
    font-size: 28px;
    line-height: 1.21;
    color: #2b3b48;
    font-weight: bold;
  }
`;

export const ConvertCurrencyCard = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(186, 201, 213, 0.3);
  padding-bottom: 10px;
  margin-bottom: 30px;
  .flag {
    width: 44px;
    height: 30px;
    margin-right: 5px;
    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }
  }
  h5 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    color: #2b3b48;
    line-height: 1.25;
    margin-bottom: 1px;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #4f6477;
    display: block;
  }
  h6 {
    font-size: 16px;
    line-height: 1.5;
    color: #2b3b48;
    text-align: right;
  }
  .d-block {
    width: 86px;
    margin-left: 10px;
    .curr {
      text-align: right;
    }
  }
  .give {
    margin-left: 20px;
  }
`;
