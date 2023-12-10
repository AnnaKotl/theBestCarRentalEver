import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin: 24px auto 50px;
`;

export const LabelInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelName = styled.label`
  color: #8a8a89;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
`;

export const InputsDiv = styled.div`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  position: relative;

  &::after {
    content: "From";
    display: block;
    position: absolute;
    top: 14px;
    left: 24px;
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }

  &::before {
    content: "To";
    display: block;
    position: absolute;
    top: 14px;
    left: 184px;
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const InputMin = styled.input`
  width: 160px;
  padding: 14px 24px 14px 69px;
  border-radius: 14px 0 0 14px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const InputMax = styled.input`
  width: 160px;
  padding: 14px 24px 14px 46px;
  border-radius: 0 14px 14px 0;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-left: 1px solid rgba(138, 138, 137, 0.2);

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;

export const Button = styled.input`
  height: 48px;
  color: rgba(237, 239, 247, 1);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 14px 44px;
  border-radius: 12px;

  background-color: rgba(239, 127, 29, 0.9);
  border: none;

  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(227, 160, 45, 0.8);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }
`;