import React, { useContext, useState, useEffect } from 'react';
import { useDecision } from '@optimizely/react-sdk';
import { arrayOf, shape, number, oneOf, oneOfType, string } from 'prop-types';
import pathOr from 'ramda/src/pathOr';
import { StoryPromoLi, StoryPromoUl } from '@bbc/psammead-story-promo-list';

import isLive from '#lib/utilities/isLive';
import { storyItem, linkPromo } from '#models/propTypes/storyItem';
import { ServiceContext } from '#contexts/ServiceContext';
import { RequestContext } from '#contexts/RequestContext';
import CpsOnwardJourney from '../CpsOnwardJourney';
import _StoryPromo from '../StoryPromo';
import FrostedGlassPromo from '../../components/FrostedGlassPromo/lazy';
import useViewTracker from '#hooks/useViewTracker';

const eventTrackingData = {
  block: {
    componentName: 'features',
  },
};

const PromoListComponent = ({ promoItems, dir }) => {
  const { serviceDatetimeLocale } = useContext(ServiceContext);
  const viewRef = useViewTracker(eventTrackingData.block);
  const { isAmp } = useContext(RequestContext);

  const [decision, isClientReady, didTimeout] = useDecision(
    'high_impact_feature_analysis_promo',
    { autoUpdate: true },
  );

  const [promoVariation, setPromoVariation] = useState(null);

  useEffect(() => {
    if (isClientReady && !didTimeout) {
      setPromoVariation(decision.variationKey);
    }
  }, [isClientReady, decision.variationKey, didTimeout]);

  let StoryPromo = _StoryPromo;

  if (promoVariation) {
    if (promoVariation === 'variation_1' && !isAmp) {
      StoryPromo = FrostedGlassPromo;
    }
  }

  return (
    <StoryPromoUl>
      {promoItems.map(item => (
        <StoryPromoLi key={item.id || item.uri} ref={viewRef}>
          <StoryPromo
            item={item}
            dir={dir}
            displayImage
            displaySummary={false}
            serviceDatetimeLocale={serviceDatetimeLocale}
            eventTrackingData={eventTrackingData}
          />
        </StoryPromoLi>
      ))}
    </StoryPromoUl>
  );
};

PromoListComponent.propTypes = {
  promoItems: arrayOf(oneOfType([shape(storyItem), shape(linkPromo)]))
    .isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

PromoListComponent.defaultProps = {
  dir: 'ltr',
};

const PromoComponent = ({ promo, dir }) => {
  const { serviceDatetimeLocale } = useContext(ServiceContext);
  const viewRef = useViewTracker(eventTrackingData);

  const { isAmp } = useContext(RequestContext);

  const StoryPromo = isAmp || isLive() ? _StoryPromo : FrostedGlassPromo;

  return (
    <div ref={viewRef}>
      <StoryPromo
        item={promo}
        dir={dir}
        displayImage
        serviceDatetimeLocale={serviceDatetimeLocale}
      />
    </div>
  );
};

PromoComponent.propTypes = {
  promo: oneOfType([shape(storyItem), shape(linkPromo)]).isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

PromoComponent.defaultProps = {
  dir: 'ltr',
};

const FeaturesAnalysis = ({
  content,
  parentColumns,
  sectionLabelBackground,
}) => {
  const { translations } = useContext(ServiceContext);

  const title = pathOr(
    'Features & Analysis',
    ['featuresAnalysisTitle'],
    translations,
  );

  return (
    <CpsOnwardJourney
      labelId="features-analysis-heading"
      title={title}
      content={content}
      parentColumns={parentColumns}
      promoComponent={PromoComponent}
      promoListComponent={PromoListComponent}
      columnType="secondary"
      sectionLabelBackground={sectionLabelBackground}
    />
  );
};

FeaturesAnalysis.propTypes = {
  content: arrayOf(shape(storyItem)),
  parentColumns: shape({
    group0: number,
    group1: number,
    group2: number,
    group3: number,
    group4: number,
    group5: number,
  }),
  sectionLabelBackground: string,
};

FeaturesAnalysis.defaultProps = {
  content: [],
  parentColumns: null,
  sectionLabelBackground: undefined,
};

export default FeaturesAnalysis;
