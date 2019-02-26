import React from "react";
import { Route } from "react-router-dom";
class ZRoute extends React.Component {
  render() {
    const component = this.props.component;
    return (
      <Route
        {...this.props}
        component={
          typeof component === "object" ? component.default ? (
            component.default
          ) : (
            () => component
          ) : (
            component
          )
        }
      />
    );
  }
}
const Common = {
  Menus: {
    first: [
      {
        name: "二级目录1",
        path: "/first"
      },
      {
        name: "二级目录2",
        path: "/first/mine"
      }
    ],
    second: [
      {
        name: "二级目录3",
        path: "/second"
      }
    ]
  },
  getNavigation: path => {
    const menus = [
      {
        name: "首页",
        path: "/"
      },
      {
        name: "第一",
        path: "/first"
      },
      {
        name: "第二",
        path: "/second"
      }
    ];
    menus.map(item => {
      if (item.path === path || (path != "/" && item.path.indexOf(path) > -1)) {
        item.selected = true;
      }
    });
    return {
      menus
    };
  },
  onIsSelected: (menu, history) => {
    if (menu.path === history.location.pathname) {
      return true;
    } else {
      if (menu.matchs) {
        return (
          menu.matchs.filter(
            item => history.location.pathname.indexOf(item) == 0
          ).length > 0
        );
      } else {
        return false;
      }
    }
  },
  ZRoute
};

export default Common;