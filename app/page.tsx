import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">Independent Consultant · Product & Project Manager · Founder</div>
          <h1>I help organisations turn complexity into flow — and ideas into working systems.</h1>
          <p className="lead">
            I work where strategy, products, teams and delivery stop connecting cleanly.
            I make work visible, expose dependencies, improve decision systems and help
            organisations build capabilities that keep working without permanent consulting.
          </p>
          <div className="actions">
            <Link href="/story" className="button">Explore my story</Link>
            <Link href="/work-with-me" className="button secondary">Work with me</Link>
          </div>
          <div className="principles">
            <span>Flow over utilisation.</span><span>Outcome over output.</span>
            <span>Learning over compliance.</span><span>Capability over dependency.</span>
          </div>
          <p className="muted">Istanbul · Düsseldorf · International</p>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">My Story</div>
        <h2>From practice to a learning system.</h2>
        <p className="lead">
          Consulting and agile transformation led to building an education provider, more than
          2,000 learners, the Skill Drops concept — and finally Risky Projects.
        </p>
        <div className="flow">Consulting & Agile → agil.bz → 2,000+ learners → Skill Drops → Risky Projects</div>
        <div className="actions"><Link href="/story" className="button secondary">Read the story</Link></div>
      </section>

      <section className="section">
        <div className="eyebrow">Founder</div>
        <h2>Risky Projects</h2>
        <p className="lead">
          An ecosystem for learning, product discovery and human + AI collaboration.
          Built around evidence, flow, just-in-time learning and real work.
        </p>
        <div className="grid">
          <div className="card highlight"><div className="kicker">Risky Startup</div><h3>Idea → Evidence → Product → First Backlog</h3><p>Discovery before delivery.</p></div>
          <div className="card"><div className="kicker">Risky School</div><h3>Learn by building.</h3><p>Skill Drops, practice, reflection and AI-supported learning.</p></div>
          <div className="card"><div className="kicker">Risky Talks</div><h3>Humans and AI working as a team.</h3><p>Roles, agents, handoffs, human gates and shared memory.</p></div>
        </div>
        <div className="actions"><Link href="/risky-projects" className="button">Explore Risky Projects</Link></div>
      </section>

      <section className="section">
        <div className="eyebrow">Client Work</div>
        <h2>I build my own systems — and I help organisations build theirs.</h2>
        <p className="lead">
          Product, project, delivery and transformation work across fintech, automotive,
          retail, industry, public infrastructure and customer operations.
        </p>
        <div className="actions"><Link href="/client-projects" className="button secondary">See client projects</Link></div>
      </section>

      <section className="section">
        <div className="eyebrow">Goodwill</div>
        <h2>Some work should simply do good.</h2>
        <p className="lead">
          I am open to selected volunteer and pro-bono work for social, educational and nonprofit initiatives
          where my experience can make a meaningful difference.
        </p>
        <div className="actions"><Link href="/work-with-me#goodwill" className="button secondary">Tell me about your cause</Link></div>
      </section>
    </>
  );
}
