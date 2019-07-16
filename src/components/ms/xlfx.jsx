function fx() {
  return (
    <div>
      利用window.performance.timing进行性能分析
      <p>
        ajax同步和异步： async:true 就是异步 同步 <false />{" "}
      </p>
      js的语言类型：string number Boolean null undefined object Symbol; Symbol:
      新的一种原始数据类型，表示结果独一无二 var s =Symbol(); Symbol
      值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性;
      {/*var a = {([mySymbol]: "Hello!")};*/}
      {/*var a  = {}; Object.defineProperty(a,s,{value: "111"})*/}
      获取指定对象的所有Symbol属性名 Object.getOwnPropertySymbols(); js判断数据类型的4种方法： typeof
      instanceof constructor Object.prototype.toString(); 手写instanceof
      {/*function instance_of (L,R){
        var O = R.prototype, L = L._proto_;
        while (true) {
          if(L === null) {
            return false
          }else if(O === L){
            return true
          } ly199138
          L = L._proto_;
        }
      }*/}
      原型模式： 创建一个共享的原型，通过拷贝创建新的对象。
      {/*var obj = {
        name: "111",
        age: "11"
      };
      var newObj = Object.create(obj);
      */}
      防抖:
      在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；典型的案例就是输入搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，就重新计时。
      {/*let time;
      debounce = () => {
        if(time) {
          clearTimeout(time)
        }
        time = setTimeout(function() {
          //do something
          time =  undefined;
        }, 200);
      }*/};
      节流：n秒中点击N次 只有一次有效;
      {/*let timer,lastTime ;
      throttle = () => {
        let now =+new Date();
        if(lastTime && lastTime - now < 2000) {
          clearTimeout(timer)
        }
        timer = setTimeout(function(){
           //do something
          lastTime =+new Date()
        },2000)
      }*/}
      继承：
      {/*原型继承:
      var cat = {
        name: "万达",
        age: 12
      };
      var newCat = {};
      newCat.prototype = new cat();
      构造继承 类继承 组合继承 实例继承 寄生组合继承*/}
      遍历一个dom树
      {/*
        function travesal (node) {
          let childNodes = node.childNodes;
          if(node&&node.nodeType === 1) {
            console.log(node.tagName)
          }
          for(let i = 0;i<childNodes.length;i++) {
            if(childNodes[i].nodeType === 1) {
              travesal(childNodes[i])
            }
          }
        }
      */}
      new做了什么
      {/*new function(func) {
        let obj = {};
        obj._proto_ = func.prototype;
        let res = func.call(obj);
        if(typeof(res) == object" || typeof(res) == "function") {
          return res
        };
        return obj
      }*/}
    </div>
  );
  //  .navigationStart 准备加载页面的起始时间
  //  .unloadEventStart 如果前一个文档和当前文档同源,返回前一个文档开始unload的时间
  //  .unloadEventEnd 如果前一个文档和当前文档同源,返回前一个文档开始unload结束的时间
  //  .redirectStart   如果有重定向,这里是重定向开始的时间.
  //  .redirectEnd     如果有重定向,这里是重定向结束的时间.
  //  .fetchStart        开始检查缓存或开始获取资源的时间
  //  .domainLookupStart   开始进行dns查询的时间
  //  .domainLookupEnd     dns查询结束的时间
  //  .connectStart                  开始建立连接请求资源的时间
  //  .connectEnd                     建立连接成功的时间.
  //  .secureConnectionStart      如果是https请求.返回ssl握手的时间
  //  .requestStart                     开始请求文档时间(包括从服务器,本地缓存请求)
  //  .responseStart                   接收到第一个字节的时间
  //  .responseEnd                      接收到最后一个字节的时间.
  //  .domLoading                       ‘current document readiness’ 设置为 loading的时间 (这个时候还木有开始解析文档)
  //  .domInteractive               文档解析结束的时间
  //  .domContentLoadedEventStart    DOMContentLoaded事件开始的时间
  //  .domContentLoadedEventEnd      DOMContentLoaded事件结束的时间
  //  .domComplete        current document readiness被设置 complete的时间
  //  .loadEventStart      触发onload事件的时间
  //  .loadEventEnd       onload事件结束的时间
  // DNS查询耗时 = domainLookupEnd - domainLookupStart
  // TCP链接耗时 = connectEnd - connectStart
  // request请求耗时 = responseEnd - responseStart
  // 解析dom树耗时 = domComplete - domInteractive
  // 白屏时间 = domloadng - fetchStart
  // domready时间 = domContentLoadedEventEnd - fetchStart
  // onload时间 = loadEventEnd - fetchStart
}
export default (func, waitTime) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime);
  };
};
