import React from "react";
import Page from "@/components/page";
import Common from "./common";
const ZRoute = Common.ZRoute;
const getNavigation = Common.getNavigation;
const Menus = Common.Menus;
const onIsSelected = Common.onIsSelected;
import Bundle from "./bundle";
const First = () => (
  <Bundle load={require("bundle-loader?lazy!@/page/first/index.jsx")} />
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
        path="/first"
        component={({ match, history }) => {
          return (
            <Page
              {...this.props}
              title="我的"
              navigation={getNavigation(match.path)}
              horizontalMenus={{
                onIsSelected: menu => onIsSelected(menu, history),
                menus: Menus.first
              }}
            >
              <ZRoute exact path={match.url} component={First} />
            </Page>
          );
        }}
      />
    );
  }
}
export default Home;