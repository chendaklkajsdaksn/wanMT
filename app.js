//加载Express模块
const express = require("express")

//加载CORS模块
const cors = require("cors")

//加载MySQL模块并且进行配置
const mysql = require("mysql")

//加载body-parser模块
const bodyParser = require("body-parser")

//加载MD5模块
const md5 = require("md5")

//创建MySQL连接池
const pool = mysql.createPool({
  //MySQL数据库服务器的地址
  host: "127.0.0.1",
  //MySQL数据库服务器端口号
  port: 3306,
  //数据库用户的用户名
  user: "root",
  //数据库用户的密码
  password: "",
  //数据库名称
  database: "wanmingtang",
  //数据库编码方式
  charset: "utf8",
  //最大连接数
  connectionLimit: 15
})

//创建Express应用
const server = express()
server.use(express.static("public"))

//使用CORS模块
server.use(
  cors({
    origin: [
      "http://127.0.0.1:8080",
      "http://127.0.0.1:8081",
      "http://localhost:8080",
      "http://localhost:8081",
      "http://192.168.0.102:8080",
      "http://175.152.148.57:8080"
    ]
  })
)

//使用body-parser模块

server.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//categories的GET路由
// server.get('/categories', (req, res) => {
//     var sql = 'select id,category_name,category_info from zhihu_category';
//     pool.query(sql, (err, results) => {
//         if (err) throw err;

//         res.send({
//             message: '查询成功',
//             code: 1,
//             results: results
//         });
//     });
// });
//获取轮播图的图片
server.get("/swipe", (req, res) => {
  var sql = "select id,image from swipe"
  pool.query(sql, (err, results) => {
    if (err) throw err

    res.send({
      code: 1,
      results: results
    })
  })
})
//获取种类的图片和商品名字信息
server.get("/type", (req, res) => {
  var sql = "select title,image,router from type"
  pool.query(sql, (err, results) => {
    if (err) throw err
    results.forEach((e, i, arr) => {
      if (arr[i].title == arr[i + 1].title) {
        results.splice(i, 1)
      }
    })
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取新品上市系列的图片详情
server.get("/xpsh", (req, res) => {
  var sql = "select image,id from xpsh"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取系列品牌酒的图片和标题
server.get("/xilie", (req, res) => {
  var sql = "select title,image from xilie"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取本月主打酒的图片和标题以及价格
server.get("/zhuda", (req, res) => {
  var sql = "select title,image,price from zhuda"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取猜你喜欢的图片标题和价格
server.get("/like", (req, res) => {
  var sql = "select title,image,price  from `like`"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取春夏秋冬系列的产品信息
server.get("/cxqd", (req, res) => {
  var sql = "select title,image,price,unit from cxqd"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/zltz", (req, res) => {
  var sql = "select title,image,price,unit,list_id from zltz"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/ysry", (req, res) => {
  var sql = "select title,image,price,unit,list_id from ysry"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/mx", (req, res) => {
  var sql = "select title,image,price,unit,list_id from mx"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/pj", (req, res) => {
  var sql = "select title,image,price,unit,list_id from pj"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/dsf", (req, res) => {
  var sql = "select title,image,price,unit,list_id from dsf"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/hj", (req, res) => {
  var sql = "select title,image,price,unit,list_id from hj"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
server.get("/cf", (req, res) => {
  var sql = "select title,image,price,unit,list_id from cf"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})
//获取详情页的数据
server.get("/list", (req, res) => {
  var sql = "select * from list"
  pool.query(sql, (err, results) => {
    if (err) throw err
    res.send({
      code: 1,
      results: results
    })
  })
})

//register的POST方式路由

server.post("/register", (req, res) => {
  //1.获取用户输入的用户名及密码
  var uname = req.body.uname
  var upwd = md5(req.body.upwd)
  console.log(uname, upwd)
  //2.以输入的用户名为条件进行查找，如果用户名不存在，则插入记录;否则提示错误信息
  var sql = "SELECT COUNT(uid) AS count FROM user WHERE uname=?"
  pool.query(sql, [uname], (err, results) => {
    if (err) throw err
    //获取指定用户名的数量，值只为0(代表用户不存在)或1(代表用户已存在)
    var count = results[0].count
    if (count == 1) {
      //错误信息
      res.send({ message: "用户注册失败", code: 0 })
    } else {
      //3.将获取到的用户名和密码等信息写入数据表
      var sql = "INSERT user(uname,upwd) VALUES(?,?)"
      //通过MySQL连接池执行SQL语句
      pool.query(sql, [uname, upwd], (err, results) => {
        if (err) throw err
        res.send({ message: "用户注册成功", code: 1 })
      })
    }
  })
})

//login的POST方式路由

server.post("/login", (req, res) => {
  //获取用户名
  var uname = req.body.uname
  //获取密码并且加密
  var upwd = md5(req.body.upwd)
  //以当前的用户名和密码为条件在数据表查询是否存在该用户
  //如果存在则登录成功，否则登录失败
  var sql = "SELECT uid,uname FROM user WHERE uname=? AND upwd=?"
  pool.query(sql, [uname, upwd], (err, results) => {
    console.log(results)
    if (err) throw err
    //如果用户名或密码存在错误的话,results将返回空数组
    //如果用户名和密码都正确的话，results将返回只有一个成员的数组
    if (results.length == 0) {
      res.send({ message: "用户名或密码错误", code: 0 })
    } else {
      //登录成功,返回用户id和用户名,用于在客户端保存到web storage中
      res.send({
        message: "用户登录成功",
        code: 1,
        uid: results[0].uid,
        uname: results[0].uname
      })
    }
  })
})
//读取收货地址
server.get("/address", (req, res) => {
  //获取用户名
  var sql = "SELECT location FROM user WHERE uid=?"
  pool.query(sql, [req.query.uid], (err, results) => {
    if (err) throw err

    //查询成功,返回用户地址
    res.send(
      req.query.callback +
        `({ 'message': '用户登录成功','code': 1,'address':${results[0].location}})`
    )
  })
})
//点击删除该用户收货地址
server.get("/delete", (req, res) => {
  //获取用户名
  var sql = "SELECT location FROM user WHERE uid=?"
  pool.query(sql, [req.query.uid], (err, results) => {
    if (err) throw err
    console.log(req.query)
    //查询成功,删除当前项
    let address = JSON.parse(results[0].location)
    address.splice(Number(req.query.index), 1)
    //删除后重新赋值给数据库
    let sql = `UPDATE user  SET location =?  WHERE uid = ?`
    pool.query(
      sql,
      [JSON.stringify(address), req.query.uid],
      (err, results) => {
        if (err) throw err
        res.send(req.query.callback + "({'message' : '添加成功','code' : 1})")
      }
    )
  })
})
//点击修改该用户收货地址
server.get("/updatelocation", (req, res) => {
  //获取用户名
  var sql = "SELECT location FROM user WHERE uid=?"
  pool.query(sql, [req.query.uid], (err, results) => {
    if (err) throw err
    //查询成功,删除当前项
    let address = JSON.parse(results[0].location)
    //把当前地址保存进其他变量,删除该数组值并在开头添加
    let addr = address[Number(req.query.index)]
    console.log(addr, "需要添加的一项")
    address.splice(Number(req.query.index), 1)
    address.unshift(addr)
    //删除后重新赋值给数据库
    console.log(address, "添加后")
    let sql = `UPDATE user  SET location =?  WHERE uid = ?`
    pool.query(
      sql,
      [JSON.stringify(address), req.query.uid],
      (err, results) => {
        if (err) throw err
        res.send(req.query.callback + "({'message' : '添加成功','code' : 1})")
      }
    )
  })
})
//获取用户信息
server.get("/user", (req, res) => {
  //获取用户名
  var sql = "SELECT * FROM user WHERE uid=?"
  pool.query(sql, [req.query.uid], (err, results) => {
    if (err) throw err
    console.log(results[0])
    res.send(
      req.query.callback +
        `({'message' : '查询成功','code' : 1,'results':${JSON.stringify(
          results[0]
        )}})`
    )
  })
})
server.get("/addlocation", (req, res) => {
  //获取用户名
  //获取用户当前信息的地址
  //使用promiss保证数据库操作先查询后添加
  var address = []
  function taskA() {
    pool.query(
      `select location from user where uid=${req.query.uid}`,
      (err, results) => {
        if (err) throw err
        // var address=JSON.parse(results);
        //如果地址为空 则不追加
        if (results[0].location) address = JSON.parse(results[0].location)
        //把当前添加的地址添加在所有地址中
        address.push(req.query)
        taskB()
      }
    )
  }
  function taskB() {
    //通过传入的用户id号添加地址到数据库
    console.log(address)
    var sql = `UPDATE user  SET location =?  WHERE uid = ?`
    pool.query(
      sql,
      [JSON.stringify(address), req.query.uid],
      (err, results) => {
        if (err) throw err
        res.send(req.query.callback + "({'message' : '添加成功','code' : 1})")
      }
    )
  }
  taskA()
})

// //articles的GET路由
// server.get('/articles', (req, res) => {

//     //获取URL地址中名称为type的参数
//     var type = req.query.type;
//     //获取URL地址中名称为page参数
//     var page = parseInt(req.query.page);
//     //用户控制每页显示的记录数
//     var pagesize = 5;

//     //根据当前的页码来计算SQL语句中offset参数值
//     var offset = (page - 1) * pagesize;
//     var pagecount = 0;
//     //执行获取特定分类下的文章总数的SQL
//     var sql = 'SELECT COUNT(zhihu_articles.id)  AS count  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=?';

//     pool.query(sql, [type], (err, results) => {
//         if (err) throw err;
//         //计算总页数
//        pagecount = Math.ceil(results[0].count / pagesize);
//     });
//     //查找 zhihu_articles(文章表)的特定记录
//     //SQL中不确定的信息使用占位符(?)表示
//     sql = `SELECT zhihu_articles.id,subject,description,image  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=? LIMIT ${offset},${pagesize}`;
//     //执行SQL查找操作
//     pool.query(sql, [type], (err, results) => {
//         //如果发生错误,则直接抛出错误
//         if (err) throw err;
//         res.send({
//             message: '查询成功',
//             code: 1,
//             results: results,
//             pagecount:pagecount
//         });

//     });
// });

// server.get('/vuex', (req, res) => {
//     var sql = 'SELECT id,subject AS productName,category_id AS salePrice FROM zhihu_articles LIMIT 10';
//     pool.query(sql, (err, results) => {
//         if (err) throw err;
//         res.send({ message: 'OK', results: results });
//     });
// });

// //获取特定用户信息的路由 /profile/3
// server.get('/profile/:id', (req, res) => {
//     var id = req.params.id;
//     var sql = 'SELECT id,username,password FROM zhihu_users WHERE id=?';
//     pool.query(sql, [id], (err, results) => {
//         if (err) throw err;

//         res.send({ message: '查询成功', code: 1, info: results[0] });
//     });
// });

// //获取特定文章信息的路由 /article/3
// server.get('/article/:id', (req, res) => {
//     var id = req.params.id;
//     var sql = 'SELECT id,subject,content FROM zhihu_articles WHERE id=?';
//     pool.query(sql, [id], (err, results) => {
//         if (err) throw err;

//         res.send({ message: '查询成功', code: 1, article: results[0] });
//     });
// });

//监听端口
server.listen(4000)
