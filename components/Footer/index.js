import Link from "next/link";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import Icons from "../SVG";

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <StyledNav>
      {path.startsWith("m", 1) ? (
        <>
          <StyledLink href="/mealrandomizer">
            <Icons variant="home">Home</Icons>
          </StyledLink>
          <StyledLink href="/mealrandomizer/likeList">
            <Icons variant="ingredients">Zutaten</Icons>
          </StyledLink>
          <StyledLink href="/mealrandomizer/allMeals">
            <Icons variant="meals">Alle Gerichte</Icons>
          </StyledLink>
        </>
      ) : (
        ""
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #8c8c8c;
  margin-top: 0.5rem;
  width: 100%;
  border-bottom: 3px solid #5684bf;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 8px solid #5684bf;
      transition: 0.5s;
      color: #5684bf;
    `};
`;
