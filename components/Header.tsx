import Link from "next/link";

const TheHeader = () => {
  return (
    <header>
      <Link href="/">Головна</Link>
      <Link href="/myworks">Мої роботи</Link>
      <Link href="/courses">курси</Link>
    </header>
  );
};

export default TheHeader;
