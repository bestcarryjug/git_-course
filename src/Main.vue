<template>
  <div id="app">
    <van-row safe-area-inset-bottom>
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </van-row>
  </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            transitionName: ''
        };
    },
    watch: {
    // 使用watch 监听$router的变化
        $route(to, from) {
            // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if (to.meta.index > from.meta.index) {
                // 设置动画名称
                this.transitionName = 'slide-left';
            } else {
                this.transitionName = 'slide-right';
            }
        }
    }

};
</script>
<style lang="less" scoped>
#app {
  padding-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
  padding-bottom: 30px;
  height: 100%;
  transition: all .2s;
}
/deep/.van-row {
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: opacity 400ms,transform 400ms;
  position: absolute;

}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
