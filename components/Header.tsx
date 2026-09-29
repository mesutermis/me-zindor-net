import Link from "next/link";

const links = [
  ["My Story", "/story"],
  ["Risky Projects", "/risky-projects"],
  ["Client Projects", "/client-projects"],
  ["Book", "/book"],
  ["About", "/about"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">MESUT ERMIS</Link>
      <nav>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link href="/work-with-me" className="button small">Work with me</Link>
    </header>
  );
}