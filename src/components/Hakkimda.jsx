const yetenekler = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Flutter",
  "Unreal Engine",
  "SAP ABAP",
];

function Hakkimda() {
  return (
    <section id="hakkimda" className="hakkimda">
      <h2>Hakkımda</h2>
      <p>
        Konya Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden 2026'da
        mezun oldum.ASELSAN Konya'da SAP ABAP stajları yaptım, ayrıca Unreal
        Engine, Python ve Flutter ile yazılım geliştirme projeleri
        yaptım.Analitik düşünen, öğrenmeye açık biriyim ve Portekiz'de
        katıldığım uluslararası bir gönüllülük projesiyle ekip çalışması ve
        kültürlerarası iletişim becerilerimi geliştirdim.
      </p>

      <h3>Yetenekler</h3>
      <ul className="yetenekler">
        {yetenekler.map((y) => (
          <li key={y}>{y}</li>
        ))}
      </ul>
    </section>
  );
}

export default Hakkimda;
