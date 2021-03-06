import React from "react";
const HashRouter = ReactRouterDOM.HashRouter;
import Common from "./common";
const ZRoute = Common.ZRoute;
import HomeRouter from "./home";
import FirstRouter from "./first";
import SecondRouter from "./second";
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
              <HomeRouter {...props} key={Util.getRandomString()} />,
              <FirstRouter {...props} key={Util.getRandomString()} />,
              <SecondRouter {...props} key={Util.getRandomString()} />
            ];
          }}
        />
      </HashRouter>
    );
  }
}

export default Routers;
