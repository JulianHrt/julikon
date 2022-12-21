import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const path = router.pathname.replace("/", "").toUpperCase();
  console.log(path);

  return (
    <>
      <h1>Julikon</h1>
      {router.pathname === "/" ? (
        ""
      ) : (
        <>
          <h2>{path}</h2>
          <button onClick={() => router.back()}>Back</button>
        </>
      )}
    </>
  );
}
