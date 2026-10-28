const linkler = [
  { id: "hakkimda", ad: "Hakkımda" },
  { id: "deneyim", ad: "Deneyim" },
  { id: "projeler", ad: "Projeler" },
  { id: "iletisim", ad: "İletişim" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Enes
      </a>
      <ul>
        {linkler.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`}>{l.ad}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
