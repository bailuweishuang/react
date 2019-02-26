import React from "react";
import { HashRouter } from "react-router-dom";
import Common from "./common.jsx";
const ZRoute = Common.ZRoute;

import HomeRouter from "./home.jsx";
// import MineRouter from "./mine.jsx";
console.log(HomeRouter)
class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <ZRoute
          component={(props, index) => {
            return [
              <HomeRouter {...props} key={Util.getRandomString()} />
              //<MineRouter {...props} key={Util.getRandomString()}/>
            ];
          }}
        />
      </HashRouter>
    );
  }
}

export default Routers;
