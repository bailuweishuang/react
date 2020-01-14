import style from "./style";
import preload from "./preload";
import { Form } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const withRouter = ReactRouterDOM.withRouter;
// 装饰器的使用
// 安装 npm run eject 
// 安装相关插件 
// npm install bable-preset-stage-2 --save-dev
// npm install bable-preset-react-native-stage- --save-dev
// 根目录下创建.babelrc
/**/ {
// 'presets': ['react-native-stage-0/decorator-suppert'] 
}/**/
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
