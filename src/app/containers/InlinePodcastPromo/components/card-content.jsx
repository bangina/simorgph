import styled from '@emotion/styled';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_B_MIN_WIDTH,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const CardContent = styled.div`
  @media (min-width: calc(${GEL_GROUP_B_MIN_WIDTH}rem + 3.4rem)) {
    padding-bottom: 10px;
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-bottom: ${GEL_SPACING};
  }
`;

export default CardContent;
