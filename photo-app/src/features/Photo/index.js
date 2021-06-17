import React from 'react';
import NotFound from "common/NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";

const Photo = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
