import React from 'react';

import SideDrawer from './SideDrawer';
import Header from './Header';
import Main from './Main';

import './App.css';

class App extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  };

  render() {
    const { isDrawerOpen } = this.state;
    return (
      <div className="app">
        <SideDrawer
          handleDrawerToggle={this.handleDrawerToggle}
          isOpen={isDrawerOpen}
        />
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <Main />
      </div>
    );
  }
}

export default App;
