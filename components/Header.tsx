import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <button>
          <Link href="/">Home</Link>
        </button>
        <button>
          <Link href="/about">About</Link>
        </button>
        <button>
          <Link href="/contact">Contact</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
