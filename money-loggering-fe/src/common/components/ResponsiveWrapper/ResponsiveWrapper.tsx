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
  ...rest
}) => (
  <>
    <StyledStandardViewContainer {...rest}>
      {standardComponent}
    </StyledStandardViewContainer>
    <StyledMobileViewContainer {...rest}>
      {mobileComponent}
    </StyledMobileViewContainer>
  </>
);

export default ResponsiveWrapper;
