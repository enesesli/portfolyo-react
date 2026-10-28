const deneyimler = [
  {
    unvan: "SAP ABAP Geliştirici Stajyeri",
    kurum: "ASELSAN Konya",
    tarih: "Temmuz – Ağustos 2026",
    maddeler: [
      "Etkileşimli satış siparişi raporları ve kontrol ekranları geliştirdim.",
      "Sipariş başlık ve kalem seviyesinde toplu güncelleme işlevleri yazdım.",
      "Adobe Forms ile PDF üretimi ve otomatik e-posta gönderimini entegre ettim.",
      "Değişiklik kaydı tutan dinamik bir tablo editörü geliştirdim.",
    ],
  },
  {
    unvan: "SAP ABAP Stajyeri",
    kurum: "ASELSAN Konya",
    tarih: "Haziran – Temmuz 2025",
    maddeler: [
      "Data Dictionary, Open SQL, rapor geliştirme ve debugging konularını uygulamalı öğrendim.",
      "Esnek mesai sistemi projesinin analiz, geliştirme ve test süreçlerine katkı sağladım.",
    ],
  },
  {
    unvan: "Gönüllü – Intercultural Volunteering for All",
    kurum: "Barcelos, Portekiz",
    tarih: "Temmuz – Ağustos 2024",
    maddeler: [
      "Uluslararası sosyal sorumluluk projelerinin planlama ve yürütülmesinde görev aldım.",
      "Yerel kurumlar, okullar ve sivil toplum kuruluşlarıyla koordineli çalıştım.",
    ],
  },
];

function Deneyim() {
  return (
    <section id="deneyim" className="deneyim">
      <h2>Deneyim</h2>
      <div className="zaman-cizelgesi">
        {deneyimler.map((d) => (
          <div key={d.unvan + d.tarih} className="deneyim-oge">
            <span className="deneyim-tarih">{d.tarih}</span>
            <h3>{d.unvan}</h3>
            <p className="deneyim-kurum">{d.kurum}</p>
            <ul>
              {d.maddeler.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deneyim;
