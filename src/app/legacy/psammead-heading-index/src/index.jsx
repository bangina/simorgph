import styled from '@emotion/styled';
import { shape, string } from 'prop-types';
import { scriptPropType } from '#legacy/gel-foundations/src/prop-types';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { getDoublePica } from '#legacy/gel-foundations/src/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const HeadingIndex = styled.h1`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSansRegular(service)};
  color: ${C_METAL};
  margin: 0;
`;

HeadingIndex.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

HeadingIndex.defaultProps = {
  tabIndex: '-1',
};

export default HeadingIndex;
