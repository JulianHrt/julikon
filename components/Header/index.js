import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const path = router.pathname
    .replace("/", "")
    .toUpperCase()
    .split("MEALRANDOMIZER/");

  return (
    <>
      <h1>Julikon</h1>
      {router.pathname === "/" ? (
        ""
      ) : (
        <>
          <h2>{path}</h2>
        </>
      )}
    </>
  );
}
