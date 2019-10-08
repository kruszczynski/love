import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const BackgroundImage = ({ children, src }) => {
  const style = {
    background: `url(${src}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  const DivWithBackground = (innerProps) => {
    const innerChildren = innerProps.children;
    return <div style={style}>{innerChildren}</div>;
  };

  return (
    <Container as={DivWithBackground} fluid="true">
      { children }
    </Container>
  );
};

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BackgroundImage;
