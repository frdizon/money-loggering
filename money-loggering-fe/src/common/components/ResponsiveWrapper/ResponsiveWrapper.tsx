import { FC, ReactNode } from "react";
import {
  StyledMobileViewContainer,
  StyledStandardViewContainer,
} from "./styles";

interface TResponsiveWrapperProps {
  standardComponent: ReactNode;
  mobileComponent: ReactNode;
}

const ResponsiveWrapper: FC<TResponsiveWrapperProps> = ({
  standardComponent,
  mobileComponent,
}) => (
  <>
    <StyledStandardViewContainer>
      {standardComponent}
    </StyledStandardViewContainer>
    <StyledMobileViewContainer>{mobileComponent}</StyledMobileViewContainer>
  </>
);

export default ResponsiveWrapper;
