export default function RiskyProjectsPage() {
  const items = [
    ["Risky Startup","Idea → Problem → Evidence → Product → First Backlog"],
    ["Risky School","Skill Drops, real projects, coaching, reflection and AI-supported learning"],
    ["Risky Talks","Human + AI collaboration with roles, agents, handoffs and human gates"],
    ["AI Team Operating System","Agent collaboration, project memory, governance and role-based AI"],
    ["Skill Drops","Learn what you need, when you need it"],
    ["Books / Research","Turn real work into reusable knowledge"],
  ];
  return <section className="section">
    <div className="eyebrow">Founder Ecosystem</div><h1>Risky Projects</h1>
    <p className="lead">Building systems for learning, products and work in the AI age.</p>
    <div className="grid">{items.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
  </section>;
}
