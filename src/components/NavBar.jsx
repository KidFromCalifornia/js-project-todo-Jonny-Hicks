import StartOverButton from "./StartOverbutton";

import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: end;
  width: 100%;
  background-color: var(--color-dark);
  border-bottom: 1px solid rgb(222, 226, 230);
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <StartOverButton onClick={() => console.log("Start Over clicked")} />
    </NavBarContainer>
  );
};
export default NavBar;
