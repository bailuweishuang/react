var moment = require("moment");
const util = {
  getRandomString: function string() {
    return `_${Math.random()
      .toString(36)
      .substr(2, 8)}`;
  },
  isString(obj) {
    return typeof obj === "string";
  },
  isFunction(obj) {
    return obj && typeof obj === "function";
  },
  isDefined(obj) {
    return typeof obj !== "undefined";
  },
  isObject(obj) {
    return typeof obj === "object";
  },
  isPlainObject(obj) {
    return (
      obj &&
      !obj.nodeType &&
      !util.isWindow(obj) &&
      util.isObject(obj) &&
      !Object.getPrototypeOf(obj) &&
      obj.constructor &&
      util.isFunction(obj.constructor)
    );
  },
  isArray: Array.isArray,
  extend() {
    let options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    if (typeof target === "boolean") {
      deep = target;

      target = arguments[i] || {};
      i++;
    }

    if (typeof target !== "object" && !util.isFunction(target)) {
      target = {};
    }

    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      options = arguments[i];
      if (options != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];

          if (target === copy) {
            continue;
          }
          copyIsArray = util.isArray(copy);
          if (deep && copy && (util.isPlainObject(copy) || copyIsArray)) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && util.isArray(src) ? src : [];
            } else {
              clone = src && util.isPlainObject(src) ? src : {};
            }

            target[name] = util.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  },
  isWindow(obj) {
    return obj != null && obj === obj.window;
  },
  getStringLength(str = "") {
    return str.replace(/[\u0391-\uFFE5]/g, "aa").length;
  },
  //加法
  add(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, c;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      var cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", "")) * cm;
      } else {
        arg1 = Number(arg1.toString().replace(".", "")) * cm;
        arg2 = Number(arg2.toString().replace(".", ""));
      }
    } else {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
  },
  //减法
  sub(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = r1 >= r2 ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  //乘法
  mul(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return (
      Number(s1.replace(".", "")) *
      Number(s2.replace(".", "")) /
      Math.pow(10, m)
    );
  },
  //除法
  div(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var t1 = 0,
      t2 = 0,
      r1,
      r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return mul(r1 / r2, Math.pow(10, t2 - t1));
  },
  reduce(args, fn) {
    return Array.prototype.slice
      .call(args)
      .reduce((arg1, arg2) => fn(arg1, arg2));
  },
  adds() {
    return util.reduce(arguments, util.add);
  },
  subs() {
    return util.reduce(arguments, util.sub);
  },
  muls() {
    return util.reduce(arguments, util.mul);
  },
  divs() {
    return util.reduce(arguments, util.div);
  },
  format(time, format = util.NYRSFM) {
    return time ? moment(time).format(format) : "";
  },
  NY: "YYYY-MM",
  ny(time) {
    return util.format(time, util.NY);
  },
  NYR: "YYYY-MM-DD",
  nyr(time) {
    return util.format(time, util.NYR);
  },
  SFM: "hh-mm-ss",
  sfm(time) {
    return util.format(time, util.SFM);
  },
  NYRSFM: "YYYY-MM-DD HH:mm:ss",
  nyrsfm(time) {
    return util.format(time, util.NYRSFM);
  },
  NYR000: "YYYY-MM-DD 00:00:00",
  nyr000(time) {
    return util.format(time, util.NYR000);
  },
  NYREND: "YYYY-MM-DD 23:59:59",
  nyrend(time) {
    return util.format(time, util.NYREND);
  },
  format({
    number = typeof arguments[0] === "object"
      ? arguments[0].number
      : arguments[0],
    decimals = arguments[1] || 2,
    point = ".",
    thousands = "",
    math = Math.round,
    suffixZero = 2
  }) {
    /*
		 * 参数说明：
		 * number：要格式化的数字
		 * decimals：保留几位小数
		 * point：小数点符号
		 * thousands：千分位符号
		 * math: 舍入方法，ceil(向上取),floor(向下取),round(四舍五入)
		 * */
    if (isNaN(number)) {
      return "";
    }
    number = (number + "").replace(/[^0-9+-Ee.]/g, "");
    let n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      s = "",
      toFixed = function(n, prec) {
        let s = n.toString();
        let sArr = s.split(".");
        let m = 0;
        try {
          m += sArr[1].length;
        } catch (e) {}

        if (prec > m) {
          return s;
          /*'' + Number(s.replace(".", "")) / Math.pow(10, m);*/
        } else {
          let sArr1 = sArr[1],
            diff;
          /*
						用例
						1.999
						0.001
						0.009
						0.095
						0.092
						0.099
						0.0000001
					*/
          // if (sArr1.indexOf("0") == 0) {
          // 	sArr1 = sArr1.replace("0", "1");
          // 	diff = 1;
          // }
          // sArr1 = String(math(Number(sArr1) / Math.pow(10, m - prec)));
          // if (diff) {
          // 	sArr1 = sArr1.replace("1", "0");
          // }
          if (sArr1.indexOf("0") == 0) {
            sArr1 = sArr1.replace("0", "1");
            diff = 1;
          }

          const isCarry =
            String(Number(sArr1.substr(0, decimals)) + 5).length > decimals;
          if (diff) {
            sArr1 = sArr1.replace("1", "0");
          }
          let zeroIndex = 0,
            isZero = true;
          sArr1.split("").forEach((i, index) => {
            if (i === "0" && isZero) {
              zeroIndex = index;
            } else {
              isZero = false;
            }
          });

          sArr1 = String(math(Number(sArr1) / Math.pow(10, m - prec)));
          if (diff && sArr1 < 10) {
            for (let i = 0; i <= zeroIndex; i++) {
              sArr1 = "0" + sArr1;
            }
          }
          if (
            isCarry &&
            sArr1
              .split("")
              .every((item, index) => (index == 0 && item == 1) || item == 0)
          ) {
            return String(Number(sArr[0]) + 1);
          }
          sArr[1] = sArr1;
          return sArr.join(".");
        }
      };
    s = (prec ? toFixed(n, prec) : "" + Math.floor(n)).split(".");
    if (thousands) {
      let re = /(-?\d+)(\d{3})/;
      while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + thousands + "$2");
      }
    }

    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    if (!suffixZero || typeof suffixZero === "number") {
      let zero = s[1].split(""),
        z = zero.length - 1;
      for (; z >= 0; z--) {
        if (zero[z] === "0") {
          if (typeof suffixZero === "number") {
            if (z >= suffixZero) {
              zero.pop();
            } else {
              break;
            }
          } else {
            zero.pop();
          }
        } else {
          break;
        }
      }
      if (zero.length > 0) {
        s[1] = zero.join("");
      } else {
        s.pop();
      }
    }
    return s.join(point);
  },
  repair(obj) {
    let result = String(obj);
    //首先去掉非数字并不是.的字符
    result = result.replace(/\D/g, m => (m === "." ? m : ""));
    //去掉多余的.字符
    let isHasDot = false;
    result = result.replace(/\./g, m => {
      if (m === "." && !isHasDot) {
        isHasDot = true;
        return m;
      } else {
        return "";
      }
    });
    //去掉首位0
    result = result.replace(/^0+\d/g, m => m.replace(/0+/g, ""));
    //补充小数首位0
    result = result.replace(/^\./g, m => `0${m}`);
    return result;
  },
  bank(num) {
    return num ? String(num).replace(/(\d{4})(?!$)/g, "$1 ") : null;
  },
  formatMoney(number, decimals = 2) {
    return util.format({
      number,
      decimals
    });
  },
  divMoney(number, div = 1, decimals = 2) {
    return util.formatMoney(util.div(number, div), decimals);
  },
  y2w(number, decimals = 2) {
    return util.formatMoney(util.div(number, 10000), decimals);
  },
  f2y(number, decimals = 2) {
    return util.formatMoney(util.div(number, 100), decimals);
  },
  thousands(number, decimals = 2, thousands = ",") {
    return util.format({
      number,
      decimals,
      thousands
    });
  },
  thousandsForSuffixZero(
    number,
    suffixZeroNum = 2,
    decimals = 2,
    thousands = ","
  ) {
    return util.format({
      number,
      decimals,
      thousands,
      suffixZeroNum
    });
  }
};
export default util;
