import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around the US Logo" className="header__logo" />
    </header>
  );
}
export default Header;
