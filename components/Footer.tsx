import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Mesut Ermis</strong>
        <p>Istanbul · Düsseldorf · International</p>
      </div>
      <div className="footer-links">
        <Link href="/work-with-me">Work with me</Link>
        <Link href="/contact">Contact</Link>
        <a href="/work-with-me#goodwill">Goodwill / Volunteer</a>
      </div>
    </footer>
  );
}