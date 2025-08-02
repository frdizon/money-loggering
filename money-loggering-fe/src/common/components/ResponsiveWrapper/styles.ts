import styled from "styled-components";

export const StyledStandardViewContainer = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMobileViewContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
