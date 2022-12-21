import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMainFlexWrapper>{children}</StyledMainFlexWrapper>
      <Footer />
    </>
  );
}

const StyledMainFlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
`;
