import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname: localStorage.getItem("uname")
      ? localStorage.getItem("uname")
      : sessionStorage.getItem("uname")
      ? sessionStorage.getItem("uname")
      : "",
    upwd: localStorage.getItem("upwd") ? localStorage.getItem("upwd") : "",
    uid: sessionStorage.getItem("uid") ? sessionStorage.getItem("uid") : 0,
    isLogined: localStorage.getItem("isLogined")
      ? localStorage.getItem("isLogined")
      : sessionStorage.getItem("isLogined")
      ? sessionStorage.getItem("isLogined")
      : false,
    orderNum: 0,
    hasOrder: false,
    car: sessionStorage.getItem("car")
      ? JSON.parse(sessionStorage.getItem("car"))
      : []
  },
  mutations: {
    addNum(state, num) {
      state.orderNum += num
      state.hasOrder = true
    },
    minu(state, num) {
      if (state.orderNum - num > 0) {
        state.orderNum--
      } else if (state.orderNum == num) {
        state.hasOrder = false
      } else {
        state.orderNum = 0
      }
    },
    addCar(state, obj) {
      state.car.push(obj)
      sessionStorage.setItem("car", JSON.stringify(state.car))
    },
    minuCar(state, obj) {
      //遍历购物车列表 删除当前选择项
      state.car.forEach((e, i) => {
        if (e.title == obj.title) {
          state.car.splice(i, 1)
        }
      })
      // 删除后把当前的购物车数量保存到storage中,防止刷新后消失
      sessionStorage.setItem("car", JSON.stringify(state.car))
    },
    logined(state, payload) {
      state.id = payload.id
      state.uname = payload.uname
      state.isLogined = true
    },
    logout(state) {
      state.id = 0
      state.uname = ""
      state.isLogined = false
      //清理sessionStorage中的数据
      sessionStorage.removeItem("uid")
      sessionStorage.removeItem("uname")
      sessionStorage.removeItem("isLogined")
    }
  },
  actions: {},
  modules: {}
})
