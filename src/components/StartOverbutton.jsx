import styled from "styled-components";

const StartOver = styled.button`
  padding: 0.3rem 0.5rem;
  color: var(--color-text);
  font-family: Impact, Haettenschweiler, "Arial Narrow", sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.2rem;
  background-color: transparent;
  height: fit-content;

  cursor: pointer;

  :active {
    color: var(--color-text);
    background-color: var(--color-dark);
    box-shadow: inset 0.1rem 0.2rem 0.2rem 0.1rem var(--color-dark);
  }

  @media (min-width: 850px) {
    font-size: 1.5rem;
  }
`;

const StartOverButton = () => {
  return (
    <StartOver
      type="button"
      aria-live="polite"
      aria-label="Click to clear Page and start over"
      onClick={() => window.location.reload()}
    >
      Start Over
    </StartOver>
  );
};
export default StartOverButton;
