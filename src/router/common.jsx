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
    home: [
      {
        name: "二级目录1",
        path: "/home"
      },
      {
        name: "二级目录2",
        path: "/home/mine"
      }
    ],
    mine: [
      {
        name: "二级目录3",
        path: "/mine"
      }
    ]
  },
  getNavigation: path => {
    const menus = [
      {
        name: "一级目录1",
        path: "/mine"
      },
      {
        name: "一级目录2",
        path: "/home"
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