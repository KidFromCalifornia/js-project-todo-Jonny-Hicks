import StartOverButton from "./StartOverbutton";

import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-dark);
  border-bottom: 1px solid rgb(222, 226, 230);
  font-family: "Brush Script MT", cursive;
  font-size: 1.5rem;
  font-weight: bold;

  h1 {
    margin: 0;
    padding-left: 1rem;
    color: var(--color-text);
  }
  @media (min-width: 850px) {
    font-size: 2rem;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1> Race To-Do The Finish! </h1>
      <StartOverButton onClick={() => console.log("Start Over clicked")} />
    </NavBarContainer>
  );
};
export default NavBar;
