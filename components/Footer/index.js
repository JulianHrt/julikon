import Link from "next/link";
import styled from "styled-components";
import Router, { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <StyledNavbar>
      <button onClick={() => Router.back()}>Zurück</button>
      {path === "/mealrandomizer" ? (
        <>
          <Link href="/mealrandomizer/addMeal">+ Gericht hinzufügen</Link>
          <Link href="/mealrandomizer/ingredientsSummary">
            Zusammenfassung der Zutaten
          </Link>
          <Link href="/mealrandomizer/allMeals">Alle Gerichte</Link>
        </>
      ) : (
        ""
      )}
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
`;
