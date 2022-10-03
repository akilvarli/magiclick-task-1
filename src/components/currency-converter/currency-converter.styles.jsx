import styled from "styled-components";

export const CurrencyConverterContainer = styled.div`
  width: 255px;
  height: 288px;
  margin: 38px 0 2px 78px;
  padding: 19px 20px 26px;
  background-image: linear-gradient(154deg, #2b3b48 32%, #8093a5 115%);

  h4 {
    margin-top: 0;
    margin-bottom: 27px;
  }

  @media (max-width: 768px) {
    width: 345px;
    height: 288px;
    margin: 0 0 26px;
    padding: 21px 24px 24px;
    background-image: linear-gradient(146deg, #2b3b48 34%, #8093a5 110%);
  }
`;

export const ConvertToForm = styled.form`
  width: 215px;
  height: 48px;
  margin: 0 0 19px;
  background-color: #fff;
  padding: 1px 18px 0 15px;
  .inputGroup {
    display: flex;
    flexwrap: nowrap;
    align-items: center;
    height: 100%;
  }
  input {
    width: 59.5%;
    border: none;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 297px;
    height: 48px;
    margin: 27px 0 19px;
    
    input {
      width: 211px;
      border: none;
      outline: none;
    }
    h4 {
      font-size:20px;
    }
  }
  
  
`;

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  pointer-events: all;
  width: 40%;
  select {
    apperance: none;
    border: 0;
    outline: 0;
    box-shadow: none;
    width: 86px;
    flex: 1;
    cursor: pointer;
    border-left: 1px solid #eaeef2;
    width: 100%;
    padding-left: 14px;
    position: relative;
    background-image: linear-gradient(45deg, transparent 50%, black 50%),
      linear-gradient(135deg, black 50%, transparent 50%),
      linear-gradient(to right, transparent, transparent);
    background-position: calc(100% - 5px) calc(0.5em + 2px),
      calc(100% - 0px) calc(0.5em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
  }
`;

export const HandleSwap = styled.div`
  display: flex;
  text-align: center;
  align-self: center;
  width: auto;
  justify-content: center;
  margin-bottom: 19px;
  svg {
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
`;
