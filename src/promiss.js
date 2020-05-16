exports.install = function(Vue, fun1,fun2) {
    // 增加两个需要执行的函数
    Vue.prototype.promiss = function(fun1,fun2) {
      let p1=()=>new Promise(open=>{
          fun1();
          open()
      });
      let p2=()=>new Promise(open=>{
          fun2();
          open()
      })
      return p1().then(p2)
    };
  };
  