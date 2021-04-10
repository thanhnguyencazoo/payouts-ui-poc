import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { PayoutPage } from "./components/PayoutPage";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PayoutPage} />{" "}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
