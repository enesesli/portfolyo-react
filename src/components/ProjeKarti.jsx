function ProjeKarti({ proje }) {
  return (
    <div className="kart">
      <h3>{proje.baslik}</h3>
      <p>{proje.aciklama}</p>
      <div className="etiketler">
        {proje.teknolojiler.map((t) => (
          <span key={t} className="etiket">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjeKarti;
