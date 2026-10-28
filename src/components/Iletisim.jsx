import { useState } from "react";

function Iletisim() {
  const [form, setForm] = useState({ ad: "", eposta: "", mesaj: "" });
  const [gonderildi, setGonderildi] = useState(false);
  const [hata, setHata] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.ad || !form.eposta || !form.mesaj) {
      setHata("Lütfen tüm alanları doldur.");
      return;
    }

    setHata("");
    console.log("Gönderilen form:", form);
    setGonderildi(true);
    setForm({ ad: "", eposta: "", mesaj: "" });
  }

  return (
    <section id="iletisim" className="iletisim">
      <h2>İletişim</h2>

      <div className="iletisim-linkler">
        <a href="mailto:enessesli23@gmail.com">E-posta</a>
        <a href="https://github.com/enesesli" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/enes-sesli-94145b255"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      {gonderildi ? (
        <p className="basari">
          Mesajın için teşekkürler! En kısa sürede dönüş yapacağım.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="iletisim-form">
          <input
            type="text"
            name="ad"
            placeholder="Adın"
            value={form.ad}
            onChange={handleChange}
          />
          <input
            type="email"
            name="eposta"
            placeholder="E-posta adresin"
            value={form.eposta}
            onChange={handleChange}
          />
          <textarea
            name="mesaj"
            placeholder="Mesajın"
            rows="5"
            value={form.mesaj}
            onChange={handleChange}
          />
          {hata && <p className="hata">{hata}</p>}
          <button type="submit">Gönder</button>
        </form>
      )}
    </section>
  );
}

export default Iletisim;
