import { useState } from "react";
import InputGroup from "./InputGroup";

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          forlabel="initialInvestment"
          labelText="Initial InvestMent"
          onValueChange={onChangeInput}
          newValue={userInput.initialInvestment}
        />
        <InputGroup
          forlabel="annualInvestment"
          labelText="Annual InvestMent"
          onValueChange={onChangeInput}
          newValue={userInput.annualInvestment}
        />
      </div>
      <div className="input-group">
        <InputGroup
          forlabel="expectedReturn"
          labelText="Expected Return"
          onValueChange={onChangeInput}
          newValue={userInput.expectedReturn}
        />
        <InputGroup
          forlabel="duration"
          labelText="Duration"
          onValueChange={onChangeInput}
          newValue={userInput.duration}
        />
      </div>
    </section>
  );
}
