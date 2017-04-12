import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

const SideDrawer = ({ handleDrawerToggle, isOpen }) => {
  return (
    <Drawer open={isOpen}>
      <AppBar title="Task List" onLeftIconButtonTouchTap={handleDrawerToggle} />
      <MenuItem>All</MenuItem>
      <MenuItem>Pinned</MenuItem>
      <MenuItem>Snoozed</MenuItem>
    </Drawer>
  );
};

export default SideDrawer;
