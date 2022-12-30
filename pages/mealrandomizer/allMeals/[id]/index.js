import { useRouter } from "next/router";

export default function editpage() {
  const router = useRouter();
  const meal = router.query;

  return <p>{meal.id}</p>;
}
