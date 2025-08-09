export default function ServicesPage() {
  const list = [
    { t: "Onglerie", d: "Manucure, gel, design minimal & artistique." },
    { t: "Maquillage", d: "Événement, mariée, shooting, naturel." },
    { t: "Coiffure", d: "Brushing, chignon, tresses, soins." },
    { t: "Décoration", d: "Scénographie mariage & corporate." },
  ];
  return (
    <div className="container-base py-24">
      <h1 className="text-3xl font-bold mb-10">Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map(i => (
          <div key={i.t} className="card hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">{i.t}</h3>
            <p className="text-sm text-[var(--text-soft)]">{i.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}