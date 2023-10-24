import "../styles/Header.css";

export default function Header(props) {
  return (
    <header>
      <h1>ᚱuᚢe Eᚢcᛟdeᚱ</h1>
      {props.children}
    </header>
  );
}
