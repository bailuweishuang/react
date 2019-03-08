global.apiHost = process.env.NODE_ENV === "production" ? "" : location.origin;

jQuery.extend(global, antd);
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GetRouter from "@/router/index";
import Util from "@/js/util";
import store from '@/redux/store';
import apiHost from '@/api';
import '@/mock'
let Api = new apiHost();
global.Api = Api;
global.Util = Util;
ReactDOM.render(
  <Provider store={store}>
    <GetRouter />
  </Provider>,
  document.getElementById("app")
);
