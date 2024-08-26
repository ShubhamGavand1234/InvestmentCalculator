import InputGroup from "./InputGroup";

export default function UserInput() {
  return (
    <section id="user-input">
      <InputGroup
        className="input-group"
        forlabel="initialInvestMent"
        labelText="Initial InvestMent"
        type="text"
      />
      <InputGroup
        className="input-group"
        forlabel="annualInvestment"
        labelText="Annual InvestMent"
        type="text"
      />
      <InputGroup
        className="input-group"
        forlabel="expoectedReturn"
        labelText="Expected Return"
        type="text"
      />
      <InputGroup
        className="input-group"
        forlabel="duration"
        labelText="Duration"
        type="number"
      />
    </section>
  );
}
