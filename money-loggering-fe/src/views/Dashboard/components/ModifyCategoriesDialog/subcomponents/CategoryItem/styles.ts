import Button from "@mui/material/Button";
import styled, { keyframes } from "styled-components";

export const Container = styled.div<{ isExpanded?: boolean }>`
  // height: fit-content;
  height: ${({ isExpanded }) => (isExpanded ? 97 : 44)}px;
  width: 100%;
  border: 1px solid #90caf9;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 6px 8px;
  transition: height 0.2s;
`;

export const StyledRowFlexContainer = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => gap ?? 0}px;
`;

const StyledFadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledButton = styled(Button)`
  height: 30px;
  flex: 1;
  margin-top: 8px;
  animation: 0.4s ${StyledFadeInKeyframes} ease-out;
`;

export const TextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
`;
