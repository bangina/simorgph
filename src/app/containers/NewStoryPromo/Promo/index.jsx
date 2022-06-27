import React from 'react';
import { node } from 'prop-types';
import Timestamp from '#components/Promo/timestamp';
import H3 from '../PromoBase/Headings.styles';
import { ListItem, OrderedList, UnorderedList } from '../PromoBase/List.styles';
import Image from '../PromoBase/Image.styles';
import Link from '../PromoBase/Link.styles';
import MediaIndicator from '../PromoBase/MediaIndicator';
import BoxWrapper from '../PromoBase/BoxWrapper.styles';

const Promo = ({ children }) => {
  return <div>{children}</div>;
};

Promo.BoxWrapper = BoxWrapper;
Promo.Heading = H3;
Promo.Image = Image;
Promo.MediaIndicator = MediaIndicator;
Promo.Link = Link;
Promo.ListItem = ListItem;
Promo.OrderedList = OrderedList;
Promo.UnorderedList = UnorderedList;
Promo.Timestamp = Timestamp;

Promo.propTypes = { children: node.isRequired };

export default Promo;
