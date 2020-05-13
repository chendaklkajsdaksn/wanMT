<template>
  <div>
    <div class="title">
      <img src="http://m.99mi.com/img/img_new/logo_login.png" />
    </div>
    <div class="login">
      <div>账号</div>
      <div>
        <input type="text" placeholder="请输入账号" v-model="uname" />
      </div>
      <div>密码</div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="upwd" />
        <label>
          <input type="checkbox" />
          <span>记住密码</span>
        </label>
      </div>
      <div>
        <button @click="login">登录</button>
      </div>
      <div class="forget">
        <div>忘记密码</div>
        <div>|</div>
        <div @click="register">注册账户</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  height: 45vh;
  line-height: 45vh;
  text-align: center;
}
.login {
  box-sizing: border-box;
  height: 38vh;
  width: 84vw;
  margin: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  font-size: 1.2rem;
}
.login input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 0.8em;
}
.login button {
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #f44;
  border: 0;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 10px;
  font-size: 1.1rem;
}
.login > div {
  flex: 0 0 15%;
}
.login > div:first-child,
.login > div:nth-child(3) {
  flex: 0 0 8%;
}
.login .password {
  position: relative;
  height: 100%;
  width: 100%;
}
.login .password label {
  color: #aaa;
  width: 25vw;
  height: 4vw;
  font-size: 0.8rem;
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -2vw;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login .password label input {
  width: 4vw;
  height: 4vw;
}
.forget {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
.forget > div {
  margin: 0 5px;
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    ...mapMutations(["logined"]),
    register() {
      this.$router.push("/register");
    },
    login() {
      if (this.uname && this.upwd) {
        this.axios
          .post("/login", "uname=" + this.uname + "&upwd=" + this.upwd)
          .then(res => {
            //获取服务器的响应代码
            var code = res.data.code;
            if (code == 0) {
              //登录失败
              this.$messagebox.alert("用户名或密码错误", "登录失败");
            } else {
              //登录成功,修改state的状态
              this.logined({ uid: res.data.uid, uname: res.data.uname });

              //将服务器返回id,username等相关信息存储到webstorage中
              sessionStorage.setItem("uid", res.data.uid);
              sessionStorage.setItem("uname", res.data.uname);
              sessionStorage.setItem("isLogined", true);

              //路由跳转
              this.$router.push("/");
            }
          })
          .catch(res => {
            console.log(res);
          });
      } else {
        this.$toast("用户名或密码为空");
      }
    }
  }
};
</script>