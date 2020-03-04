import React from 'react';
import Routes from './Routes.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';

function Header() {
  return (
    <div>
      <Router>
        <div>
          <AppBar color='secondary' position='sticky'>
            <Toolbar>
              <Typography variant='h6'>
                Website Name
              </Typography>
              <Tabs value={0}>
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Courses" component={Link} to="/courses" />
              <Tab label="Gallery" component={Link} to="/gallery" />
              <Tab label="Shop" component={Link} to="/shop" />
              <Tab label="About" component={Link} to="/about" />
              </Tabs>
            </Toolbar>
          </AppBar>
          <Switch>
            {Routes.map(({path, Component}, i) => 
              <Route key={i} exact path={path} component= {Component}/>
            )}
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Header;
