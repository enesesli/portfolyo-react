import { useEffect, useState } from "react";

function Header() {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") || "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    localStorage.setItem("tema", tema);
  }, [tema]);

  function temayiDegistir() {
    setTema(tema === "dark" ? "light" : "dark");
  }

  return (
    <header>
      <nav>
        <span className="logo">Enes</span>
        <ul>
          <li>
            <a href="#hakkimda">Hakkımda</a>
          </li>
          <li>
            <a href="#projeler">Projeler</a>
          </li>
          <li>
            <a href="#iletisim">İletişim</a>
          </li>
        </ul>
        <button className="tema-buton" onClick={temayiDegistir}>
          {tema === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
