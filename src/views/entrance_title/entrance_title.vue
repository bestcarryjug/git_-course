<template>
  <div class="entrance_title" v-if='params'>
    <header class="entrance_title_header">
      <application>{{title}}</application>
    </header>
    <main class="entrance_title_main overflowScroll-y">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import { themeDetail } from '../../plugin/mixins'
export default {
    mixins: [themeDetail],
    data() {
        return {
            title: '校园主题应用',
            params: ''
        };
    }
};
</script>
<style lang="less" scope>
.entrance_title {
  .hw(100%);
  > .entrance_title_main {
    .hw(calc(100% - 30px), 100%);
  }
}
</style>
