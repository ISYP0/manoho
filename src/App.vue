<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right",
    };
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
};
</script>

<style lang="less">
@import url("weui");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  --weui-BTN-DEFAULT-COLOR: #22b2e7;
  background-color: #eff3f9;
  line-height: 0;
  .weui-half-screen-dialog {
    font-size: 0.14rem;
    .weui-half-screen-dialog__ft {
        .weui-hidden_abs {
            font-size: 0.14rem;
        }
        
    }
}
}
</style>
