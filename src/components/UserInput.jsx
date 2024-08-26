import { useState } from "react";
import InputGroup from "./InputGroup";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1299,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, updatedValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          forlabel="initialInvestment"
          labelText="Initial InvestMent"
          onValueChange={handleChange}
          newValue={userInput.initialInvestment}
        />
        <InputGroup
          forlabel="annualInvestment"
          labelText="Annual InvestMent"
          onValueChange={handleChange}
          newValue={userInput.annualInvestment}
        />
      </div>
      <div className="input-group">
        <InputGroup
          forlabel="expectedReturn"
          labelText="Expected Return"
          onValueChange={handleChange}
          newValue={userInput.expectedReturn}
        />
        <InputGroup
          forlabel="duration"
          labelText="Duration"
          onValueChange={handleChange}
          newValue={userInput.duration}
        />
      </div>
    </section>
  );
}
