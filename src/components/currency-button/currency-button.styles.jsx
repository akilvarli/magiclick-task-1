import styled from "styled-components";

export const AboutButton = styled.button`
  width: 345px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b3b48;
  color: #fff;
  letter-spacing: 0.94px;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #2b3b48;
    border: 1px solid #2b3b48;
  }
  @media (max-width: 768px) {
   margin-top:26px;
    }
  }
`;

export const CustomButton = styled.button`
  width: 345px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #2b3b48;
  letter-spacing: 0.94px;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  cursor: pointer;
  border: 1px solid #2b3b48;
  margin-left: 75px;

  &:hover {
    background-color: #2b3b48;
    color: #fff;
    border: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    border: 0;
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
    &:after {
      font-family: "Font Awesome 5 Free";
      content: "\f061";
      margin-left: 4px;
    }
  }
`;
