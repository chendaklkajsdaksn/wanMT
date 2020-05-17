<template>
  <div>
    <div>
      <mt-header title="用户注册" fixed class="head">
        <router-link to="/login" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="reg">
      <div>设置账号</div>
      <div>
        <input
          type="text"
          placeholder="账号"
          v-model="uname"
          maxlength="16"
          minlength="8"
          @blur="toast"
        />
      </div>
      <div>设置密码</div>
      <div class="password">
        <input
          type="password"
          placeholder="密码"
          maxlength="16"
          minlength="8"
          v-model="upwd"
          @blur="toast"
        />
      </div>
      <div>再次输入密码</div>
      <div class="password">
        <input
          type="password"
          placeholder="确认密码"
          v-model="checkwd"
          maxlength="16"
          minlength="8"
          @blur="toast"
        />
      </div>
      <div class="toast">{{ mes }}</div>
      <div>
        <button @click="register">注册</button>
      </div>
      <div class="xieyi">
        <input type="checkbox" v-model="xieyi" />
        我已阅读并同意
        <span><用户协议></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.head {
  background: rgb(209, 15, 38);
  font-size: 1em;
}
.reg {
  box-sizing: border-box;
  height: 350px;
  width: 84vw;
  margin: 8vw;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  font-size: 1.1rem;
}
.reg input {
  box-sizing: border-box;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 0.8em;
}
.reg button {
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  background: #f44;
  border: 0;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 10px;
  font-size: 1.1rem;
}

.reg > div {
  flex: 0 0 8%;
}
.reg .toast {
  font-size: 0.8rem;
  color: #f00;
}
.reg .password {
  position: relative;
  width: 100%;
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
.xieyi {
  font-size: 0.8rem;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xieyi input {
  width: 15px;
  height: 15px;
  position: relative;
  top: -1px;
  margin-right: 2px;
}
.xieyi span {
  color: #f44;
}
</style>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      checkwd: "",
      mes: "请输入账号!",
      xieyi: false
    };
  },
  methods: {
    toast() {
      if (!this.uname) {
        this.mes = "请输入8~16位账号";
      } else if (!this.upwd) {
        this.mes = "请输入8~16位密码";
      } else if (!this.checkwd) {
        this.mes = "请确认密码";
      } else if (this.upwd != this.checkwd) {
        this.mes = "两次密码输入不一致";
      } else {
        this.mes = "";
      }
    },
    register() {
      if (!this.mes) {
        if (this.xieyi) {
          this.axios
            .post("/register", "uname=" + this.uname + "&upwd=" + this.upwd)
            .then(res => {
              console.log(res.data.code);
              if (res.data.code == 0) {
                this.$toast("用户名已存在,请更换用户名重新注册");
              } else {
                this.$toast("注册成功");
                this.$router.back();
              }
            });
        } else {
          this.$toast("请阅读用户协议并同意");
        }
      }
    }
  }
};
</script>
