import styled from "styled-components";

const StartOver = styled.a`
  padding: 0.5rem 1rem;
  color: var(--color-text);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;

const StartOverButton = () => {
  return (
    <StartOver
      aria-live="polite"
      aria-label="Click to clear Page and start over"
      onClick={() => window.location.reload()}
    >
      Start Over
    </StartOver>
  );
};
export default StartOverButton;
