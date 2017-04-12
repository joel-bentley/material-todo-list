import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({ handleDrawerToggle }) => {
  return (
    <AppBar title="Task List" onLeftIconButtonTouchTap={handleDrawerToggle} />
  );
};

export default Header;
