<template>
  <div class="page">
    <div class="page__hd">
      <img alt="Health 100" src="../assets/images/fedbk-head-bg.png" />
      <p>
        我们重视您的每一次反馈，以助力我们提升服务品质。<br />感谢您的信任和支持!
      </p>
    </div>
    <div class="page__bd page__bd_spacing">
      <section>
        <router-link tag="a" to="/suggest">
          <span class="icon ts"></span>
          投诉
        </router-link>
      </section>
      <section>
        <router-link tag="a" to="/suggest">
          <span class="icon jy"></span>
          建议
        </router-link>
      </section>
      <section>
        <router-link tag="a" to="/suggest">
          <span class="icon by"></span>
          表扬
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.page__hd {
  img {
    width: 100%;
  }
  p {
    color: #222;
    font-size: 0.12rem;
    line-height: 0.2rem;
    width: 100%;
    text-align: center;
  }
}
.page__bd_spacing {
  padding: 0.15rem;
}
.page__bd {
  section {
    background-color: #fff;
    margin-bottom: 0.16rem;
    padding: 0.18rem 0rem 0.18rem 0rem;
    border-radius: 0.06rem;
    text-align: center;
    // box-shadow: 1px 1px 5px rgb(190 190 190 / 20%);
    // font-size: 0.16rem;
    color: #222;
    a {
      color: #222;
      font-size: 0.14rem;
      display: block;
    }
    .icon {
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.16rem;
      background-repeat: no-repeat;
      background-size: 0.6rem 0.6rem;
      vertical-align: middle;
    }
    .ts {
      background-image: url(../assets/images/fedbk-todo-ts.png);
    }
    .jy {
      background-image: url(../assets/images/fedbk-todo-jy.png);
    }
    .by {
      background-image: url(../assets/images/fedbk-todo-by.png);
    }
  }
}
</style>
