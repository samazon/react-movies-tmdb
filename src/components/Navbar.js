// Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link href="/">Home</Link>
      <Link href="/upcoming">Upcoming</Link>
      <Link href="/trending">Trending</Link>
    </nav>
  );
};

export default Navbar;
