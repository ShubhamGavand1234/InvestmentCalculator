import investmentLogog from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <>
      <header id="header">
        <img src={investmentLogog} />
        <h1>Investment Calculator</h1>
      </header>
    </>
  );
}

export default Header;
