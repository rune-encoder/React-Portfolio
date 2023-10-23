export default function Header(props) {
  console.log(props.children.type);

  return (
    <header>
      <h1>Header.JSX</h1>
      {props.children}
    </header>
  );
}
