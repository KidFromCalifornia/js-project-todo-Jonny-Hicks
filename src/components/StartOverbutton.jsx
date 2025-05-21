import styled from "styled-components";

const StartOver = styled.a`
  padding: 0.5rem 1rem;
  color: var(--color-text);
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StartOverButton = () => {
  return (
    <StartOver onClick={() => window.location.reload()}>Start Over</StartOver>
  );
};
export default StartOverButton;
