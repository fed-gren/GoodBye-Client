import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Start from "./pages/Start";
import MapPage from "./pages/MapPage";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const App = _ => {
  return (
    <HashRouter>
      <AppWrapper>
        <Route path="/" exact component={Start} />
        <Route path="/map/" component={MapPage} />
      </AppWrapper>
    </HashRouter>
  );
};

export default App;
