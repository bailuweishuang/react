import React from "react";
import Page from "../components/page";
import Common from "./common";
const ZRoute = Common.ZRoute;
const getNavigation = Common.getNavigation;
const Menus = Common.Menus;
import Bundle from "./bundle";
const Homes = () => (
  <Bundle load={require("bundle-loader?lazy!@/page/home/index.jsx")} />
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <ZRoute
        path="/"
        exact
        component={({ match, history }) => {
          return (
            <Page
              {...this.props}
              title="测试"
              navigation={getNavigation(match.path)}
            >
              <ZRoute exact path={match.url} component={Homes} />
            </Page>
          );
        }}
      />
    );
  }
}
export default Home;
