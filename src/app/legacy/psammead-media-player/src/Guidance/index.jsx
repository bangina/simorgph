import React from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_DBL,
  GEL_SPACING,
} from '#legacy/gel-foundations/src/spacings';
import { GEL_LONG_PRIMER } from '#legacy/gel-foundations/src/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '#legacy/gel-foundations/src/breakpoints';

const GUIDANCE_BACKGROUND = 'rgba(34, 34, 34, 0.75)';

const GuidanceWrapper = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER};
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0.0625rem solid transparent;
  color: ${C_WHITE};
  ${({ guidanceMessage }) =>
    guidanceMessage
      ? `
    background-color: ${GUIDANCE_BACKGROUND};
    @media screen and (-ms-high-contrast: active) {
      background-color: transparent;
    }`
      : ``}

  ${({ noJsClassName }) =>
    noJsClassName &&
    `
      .${noJsClassName} & {
        background-color: ${GUIDANCE_BACKGROUND};
        @media screen and (-ms-high-contrast: active) {
          background-color: transparent;
        }
        .guidance-message {
          display: none;
        }
      }
    `}
`;

const GuidanceMessage = styled.strong`
  display: block;
  font-weight: normal;
  padding: ${GEL_SPACING};
  border-bottom: 0.0625rem solid transparent;
  @media screen and (-ms-high-contrast: active) {
    background-color: window;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const StyledNoScript = styled.noscript`
  position: absolute;
  bottom: 0;
  ${({ noJsClassName }) =>
    !noJsClassName &&
    `
      display: none;
    `}
`;

const Guidance = ({ guidanceMessage, service, noJsMessage, noJsClassName }) => (
  <GuidanceWrapper
    data-e2e="media-player__guidance"
    service={service}
    guidanceMessage={guidanceMessage}
    noJsClassName={noJsClassName}
  >
    {guidanceMessage && (
      <GuidanceMessage className="guidance-message" aria-hidden="true">
        {guidanceMessage}
      </GuidanceMessage>
    )}
    <StyledNoScript noJsClassName={noJsClassName}>
      <GuidanceMessage>{noJsMessage}</GuidanceMessage>
    </StyledNoScript>
  </GuidanceWrapper>
);

Guidance.propTypes = {
  guidanceMessage: string,
  service: string.isRequired,
  noJsMessage: string.isRequired,
  noJsClassName: string,
};

Guidance.defaultProps = {
  guidanceMessage: null,
  noJsClassName: null,
};

export default Guidance;
