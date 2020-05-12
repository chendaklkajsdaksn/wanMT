<template>
  <div>
    <div class="list_header" @click="select">
      <div class="iconfont iconicon-test58" data-id="0"></div>
      <div :class="selected==1?'boder_bottom':``" data-id="1">宝贝</div>
      <div :class="selected==2?'boder_bottom':``" data-id="2">详情</div>
      <div :class="selected==3?'boder_bottom':``" data-id="3">评价</div>
      <div :class="selected==4?'boder_bottom':``" data-id="4">推荐</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    select(e) {
      // 如果点击返回时返回之前页;
      if (e.target.dataset.id == 0) {
        this.$router.back();
      } else if (e.target.dataset.id) {
        //把自定义属性值赋值到变量seected中
        this.selected = e.target.dataset.id;
      }else{
      }
    }
  }
};
</script>
<style scoped>
.list_header {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 7vh;
  background-color: rgb(209, 15, 38);
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
}
.list_header > div {
  flex: 0 0 10%;
  margin-left: 5px;
  margin-right: 5px;
  height: 60%;
  line-height: 1.9;
}
.boder_bottom {
  border-bottom: 2px solid #eee;
}
.list_header > div:first-child {
  border: 0;
  height: auto;
  margin: 0;
  font-size: 2em;
  position: absolute;
  left: 10px;
}
</style>