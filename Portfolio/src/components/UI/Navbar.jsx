export default function Navbar({ links }) {
  console.log(links);

  return (
    <ul>
      {links.map((link) => (
        <li key={link.key}>{link}</li>
      ))}
    </ul>
  );
}
