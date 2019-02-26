import React from "react";
import ReactDOM from "react-dom";
import GetRouter from "@/router/index.js";
import Util from "@/js/util.js";
global.Util = Util;
ReactDOM.render(<GetRouter />, document.getElementById("app"));
