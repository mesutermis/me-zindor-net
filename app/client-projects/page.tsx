export default function ClientProjectsPage() {
  const clients = ["ENIOLA × Direct Scouts","Qonto / Intelcia","Belden Electronics","Lekkerland / REWE","mecom / Bundesnetzagentur","Vorwerk","Aptiv","diconium / CARIAD","Atrify","Hermes / OTTO","fashionette"];
  return <section className="section">
    <div className="eyebrow">Client Work</div><h1>Selected client projects.</h1>
    <p className="lead">Independent consulting across product, project, transformation and delivery.</p>
    <div className="grid">{clients.map((c,i)=><div className="card" key={c}><div className="kicker">{i===0?"Current":"Engagement"}</div><h3>{c}</h3><p>Case structure: Context → Challenge → My Role → System Change → Methods → Outcome.</p></div>)}</div>
  </section>;
}
