import React from "react";

// lib
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// component
import Menu from "./components/Menu";
import NoMatch from "./components/Nomatch";

// container
import HomeContainer from "./containers/HomeContainer";
import AchieveListContainer from "./containers/AchieveListContainer";
import AchievementContainer from "./containers/AchieveContainer";
import ReviewListContainer from "./containers/ReviewListContainer";
import ReviewContainer from "./containers/ReviewContainer";

const AppRouter: React.FC = () => {
  return (
    <Container>
      <Router>
        <Menu />
        <Switch>
          <Route strict exact path="/" component={HomeContainer} />
          <Route
            strict
            exact
            path="/achievements"
            component={AchieveListContainer}
          />
          <Route
            strict
            exact
            path="/achievements/:id"
            component={AchievementContainer}
          />
          <Route strict exact path="/reviews" component={ReviewListContainer} />
          <Route strict exact path="/reviews/:id" component={ReviewContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  min-height: 1000px;
  margin: auto;
`;

export default AppRouter;
