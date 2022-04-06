import * as React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useColorScheme } from "../utils/useColorScheme";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
  .react-toggle-track {
    > * {
      line-height: 9px !important;
      font-size: 13px;
    }
    &-check {
      left: 6px !important;
    }
    &-x {
      right: 12px !important;
    }
  }
`;
const ColorSchemeToggle: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <ToggleContainer className="toggle-container">
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode"
      />
    </ToggleContainer>
  );
};

export default ColorSchemeToggle;
