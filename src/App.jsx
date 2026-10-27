import Header from "./components/Header";
import Projeler from "./components/Projeler";
import Hakkimda from "./components/Hakkimda";
import Iletisim from "./components/Iletisim";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <h1>Merhaba, ben Enes 👋</h1>
          <p>
            Bilgisayar mühendisiyim. SAP ABAP ve web teknolojileri üzerine
            çalışıyorum.
          </p>
        </section>

        <Hakkimda />
        <Projeler />
        <Iletisim />
        <section id="iletisim">
          <h2>İletişim</h2>
        </section>
      </main>

      <footer>
        <p>© 2026 Enes</p>
      </footer>
    </>
  );
}

export default App;
