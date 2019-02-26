import React from "react";
import Page from "../components/page/index.jsx";
import Common from "./common.jsx";
const ZRoute = Common.ZRoute;
const getNavigation = Common.getNavigation;
const Menus = Common.Menus;
const onIsSelected = Common.onIsSelected;
import Bundle from "./bundle.js";
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
        path="/home"
        component={({ match, history }) => {
          return (
            <Page
              {...this.props}
              title="测试"
              navigation={getNavigation(match.path)}
              horizontalMenus={{
                onIsSelected: menu => onIsSelected(menu, history),
                menus: Menus.home
              }}
            >
              <ZRoute exact path={match.url} component={Homes} />
              {/*<ZRoute path={`${match.url}/mine`} component={Mine} />*/}
            </Page>
          );
        }}
      />
    );
  }
}
export default Home;
