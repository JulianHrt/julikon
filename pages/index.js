import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/mealrandomizer" passHref>
        Zum Gerichterandomizer
      </Link>
    </>
  );
}
