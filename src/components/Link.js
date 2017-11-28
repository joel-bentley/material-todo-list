import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const Link = ({ active, children, onClick }) => {
  return (
    <Button
      raised={active}
      color="primary"
      onClick={e => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
