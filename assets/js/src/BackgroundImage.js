import React from 'react';
import Container from 'react-bootstrap/Container';

const BackgroundImage = (props) => {
  const { children, src } = props;
  const style = {
    background: `url(${src}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    // background: `red`,
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

export default BackgroundImage;
