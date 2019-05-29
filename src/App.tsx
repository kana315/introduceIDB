import React from "react";

// lib
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// component
import Menu from "./components/Menu";
import NoMatch from "./components/Nomatch";

// container
import HomeContainer from "./containers/HomeContainer";
import AchieveContainer from "./containers/AchieveContainer";
import AchieveChildContainer from "./containers/AchieveChildContainer";
import ReviewContainer from "./containers/ReviewContainer";
import ReviewChildContainer from "./containers/ReviewChildContainer";
import UserContainer from "./containers/UserContainer";

import DemoDB from "./DB/db";

const Context = React.createContext<DemoDB>();
const db = new DemoDB("myDb");

const AppRouter: React.FC = () => {
  return (
    <Container>
      <Context.Provider value={db}>
        <Router>
          <Menu />
          <Switch>
            <Route strict exact path="/" component={HomeContainer} />
            <Route
              strict
              exact
              path="/achievements"
              component={AchieveContainer}
            />
            <Route
              strict
              exact
              path="/achievements/:id"
              component={AchieveChildContainer}
            />
            <Route strict exact path="/reviews" component={ReviewContainer} />
            <Route
              strict
              exact
              path="/reviews/:id"
              component={ReviewChildContainer}
            />
            <Route strict exact path="/users" component={UserContainer} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Context.Provider>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  min-height: 1000px;
  margin: auto;
`;

export default AppRouter;
