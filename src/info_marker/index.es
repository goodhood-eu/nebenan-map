import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Marker from '../marker';


const InfoMarker = (props) => {
  const { small, className, ...cleanProps } = props;
  const iconClass = clsx('c-info_marker', className, { 'is-small': small });

  const icon = {
    className: iconClass,
    iconSize: false,
    html: '<i class="icon-i" />',
  };

  return <Marker {...cleanProps} divIcon={icon} />;
};

InfoMarker.defaultProps = {
  small: false,
};

InfoMarker.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool.isRequired,
};

export default InfoMarker;
