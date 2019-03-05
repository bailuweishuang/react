import style from "./style";
import preload from "./preload";
import { Form } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const withRouter = ReactRouterDOM.withRouter;
let page = options => {
  options = { withRouter: true, ...options };
  return function(Component) {
    if (options && options.style) {
      Component = style(options.style)(Component);
    }
    if (options.preload) {
      Component = preload(
        options.preload,
        options.preloadLoadComponent,
        options.preloadMinLoadTime
      )(Component);
    }
    if (options && options.withRouter) {
      Component = withRouter(Component);
    }
    if (options && options.form) {
      Component = Form.create()(Component);
    }
    if (options && options.connect) {
      const { mapStateToProps, mapDispatchToProps } = options.connect;
      function mapDispatchToProp(dispatch) {
        return {
          ...bindActionCreators(mapDispatchToProps, dispatch)
        };
      }
      Component = connect(mapStateToProps, mapDispatchToProp)(Component);
    }
    return Component;
  };
};
export default page;
