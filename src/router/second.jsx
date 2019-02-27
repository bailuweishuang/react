import React from "react";
import Page from "@/components/page";
import Common from "./common";
const ZRoute = Common.ZRoute;
const getNavigation = Common.getNavigation;
const Menus = Common.Menus;
const onIsSelected = Common.onIsSelected;
import Bundle from "./bundle";
const Second = () => (
  <Bundle load={require("bundle-loader?lazy!@/page/second/index.jsx")} />
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
        path="/second"
        component={({ match, history }) => {
          return (
            <Page
              {...this.props}
              title="我的"
              navigation={getNavigation(match.path)}
              horizontalMenus={{
                onIsSelected: menu => onIsSelected(menu, history),
                menus: Menus.second
              }}
            >
              <ZRoute exact path={match.url} component={Second} />
            </Page>
          );
        }}
      />
    );
  }
}
export default Home