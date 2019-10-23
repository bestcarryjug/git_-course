<template>
  <div class="search">
    <header class="search_header">
      <headerSearch @enkeyup="enkeyup">
        <template slot="headerSearch_right">
          <van-button type="info" @click="$router.push('/')">取消</van-button>
        </template>
      </headerSearch>
    </header>
    <main>
      <!-- <sections v-for="(item,index) in params" :key="index" :params="item"></sections> -->
    </main>
  </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
        enkeyup (data) {
            this.$router.push({
                path: `/search_detail/${data}`
            })
        }
    }
}
</script>
<style lang="less">
.search {
  .hw(100%);
  overflow: hidden;
    box-sizing: border-box;
  > .search_header {
    .headerSearch_search {
      width: 79% !important;
    }
    .van-button {
      .hw(30px,60px);
      line-height: 30px;
      border-radius: 3px;
    }
    .van-button--info {
      background-color: @colorRed;
      .font-13;
      border: none;
    }
  }
}
</style>
