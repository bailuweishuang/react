import React from "react";
const Link = ReactRouterDOM.Link
import DocumentTitle from "react-document-title";
import "./style.scss";
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    const props = this.props;
    const title = props.title;
    const horizontalMenus = props.horizontalMenus;
    const navigation = props.navigation;
    const { onIsSelected } = horizontalMenus || {};
    return (
      <DocumentTitle title={title}>
        <div className="page-title">
          <div className="page-first-title">
            {navigation && navigation.menus.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  {...item.props}
                  key={String(index + 1)}
                  replace
                >
                  <div className={`${item.selected ? "onSelected" : ""} slecet`}>{item.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="page-second-title">
            {horizontalMenus && horizontalMenus.menus.map((menu, index) => {
              return (
                <Link
                  to={menu.path}
                  {...menu.props}
                  key={String(index + 1)}
                  replace
                >
                  <div className={`${onIsSelected(menu) ? "onSelected" : ""} slecet`}>{menu.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="page-content">{props.children}</div>
        </div>
      </DocumentTitle>
    );
  }
}
export default Page;
