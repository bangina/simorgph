import React, { useContext } from 'react';
import { string } from 'prop-types';
import Copyright from '#psammead/psammead-copyright/src';
import { ServiceContext } from '../../../contexts/ServiceContext';
import VisuallyHiddenText from '../../../components/VisuallyHiddenText';

const CopyrightContainer = ({ children }) => {
  const { dir, imageCopyrightOffscreenText, lang } = useContext(ServiceContext);
  const copyrightProps = {
    position: dir === 'rtl' ? 'right' : 'left',
  };

  return (
    <Copyright {...copyrightProps}>
      {imageCopyrightOffscreenText ? (
        <VisuallyHiddenText>{imageCopyrightOffscreenText}</VisuallyHiddenText>
      ) : null}
      {lang === 'en-GB' ? children : <span lang="en-GB">{children}</span>}
    </Copyright>
  );
};

CopyrightContainer.propTypes = {
  children: string.isRequired,
};

export default CopyrightContainer;
