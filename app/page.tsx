const services = [
  ["01", "Frontend", "React interfaces with the care users feel: clear structure, fast interactions, and a finish that earns trust.", "React / TypeScript"],
  ["02", "Full-stack", "Product work across the boundary — from the first screen to the data model and the last deploy.", "Product / Platform"],
  ["03", "Backend & systems", "Quiet, dependable foundations: APIs, background jobs, integrations, and systems that stay understandable.", "Python / Node / C++"],
  ["04", "Database design", "Schemas and queries shaped around the real business, not an abstract ideal of it.", "PostgreSQL / SQL"],
];

const stack = ["React", "TypeScript", "Python", "C++", "PostgreSQL", "Node.js"];

export default function Home() {
  return (
    <main>
      <nav className="site-nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">lxx9<span className="accent">.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <a className="nav-handle mono" href="https://gitlab.com/lxx9" target="_blank" rel="noreferrer">@lxx9 ↗</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker mono">Independent developer / Tallinn, EE</p>
          <h1>I build digital products that hold up under <em>real use.</em></h1>
          <p className="hero-intro">Frontend-first full-stack development for companies and founders who care about the details.</p>
          <a className="button" href="#contact">Start a conversation <span>↗</span></a>
        </div>
        <div className="years" aria-label="8 years experience"><strong>8</strong><span>years<br />in the craft</span></div>
        <p className="scroll-note mono">Scroll to explore <span>↓</span></p>
      </section>

      <section className="section shell about" id="about">
        <div className="section-mark mono">A / 01</div>
        <div className="section-content"><h2>Good software is felt<br />before it is explained.</h2><div className="about-text"><p>I&apos;m a full-stack developer with a frontend instinct — I care about the shape of an experience and the machinery that makes it possible.</p><p>For the last eight years, I&apos;ve been building products, running a business, and learning where the seams are. That means I can zoom in on a stubborn interaction or zoom out to the system around it.</p></div></div>
      </section>

      <section className="section shell" id="services">
        <div className="section-mark mono">B / 02</div><div className="section-content"><h2>What I can take<br />off your plate.</h2><div className="service-list">{services.map(([num, title, text, tools]) => <article className="service-row" key={num}><span className="service-num mono">{num}</span><h3>{title}</h3><p>{text}</p><span className="service-tools mono">{tools}</span></article>)}</div></div>
      </section>

      <section className="section shell stack-section" id="stack">
        <div className="section-mark mono">C / 03</div><div className="section-content"><h2>Tools I reach for<br />without ceremony.</h2><div className="stack-grid">{stack.map((item) => <div className="stack-item" key={item}><span className="dot" />{item}</div>)}</div></div>
      </section>

      <section className="section shell links-section" id="links">
        <div className="section-mark mono">D / 04</div><div className="section-content"><h2>Find me<br />in the wild.</h2><div className="external-links"><a href="https://gitlab.com/lxx9" target="_blank" rel="noreferrer"><span>GitLab</span><strong>@lxx9</strong><b>↗</b></a><a href="https://x.com/sda4_" target="_blank" rel="noreferrer"><span>X / Twitter</span><strong>@sda4_</strong><b>↗</b></a></div></div>
      </section>

      <section className="contact shell" id="contact"><div><p className="kicker mono">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something solid.</em></h2></div><div className="contact-action"><p>Tell me what you&apos;re building, where it&apos;s stuck, or what you want to make clearer.</p><a className="button" href="mailto:hello@lxx9.dev">Email me <span>↗</span></a></div></section>
      <footer className="footer shell"><span>© {new Date().getFullYear()} lxx9</span><span className="mono">Built with intention</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
