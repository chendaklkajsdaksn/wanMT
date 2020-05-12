<template>
  <div>
    <Header></Header>
    <Footer :active="active"></Footer>
  </div>
</template>
<script>
import Header from "../components/myHeader";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      active: "购物车"
    };
  }
};
</script>