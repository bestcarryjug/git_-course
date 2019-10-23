<template>
  <div class="search_detail">
    <header class="search_detail_header">
      <headerSearch :value="value">
        <template slot="headerSearch_left">
          <div class="back" @click="$router.go(-1)">
            <div class="back_son">
              <img src="../../assets/images/back.jpg" alt />
            </div>
          </div>
        </template>
      </headerSearch>
    </header>
    <main class="search_detail_main">
      <div
        class="search_detail_main_sectioned"
        v-if="params.length"
        v-for="(item,index) in params"
        :key="index"
      >
        <sectioned :className="index==params.length-1?'section':'sectionboder'" :params='item'></sectioned>
      </div>
      <nodata v-if="!params.length"></nodata>
    </main>
  </div>
</template>
<script>
export default {
    data() {
        return {
            params: [],
            value: this.$route.params.value
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.$http.get(`${this.$url.search}?key=${this.value}`).then(res => {
                this.params = res.data;
            });
        }
    }
};
</script>
<style lang="less" scoped>
.search_detail {
  .hw(100%);
  box-sizing: border-box;
  overflow: hidden;
  > .search_detail_main {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: -webkit-calc(100% - 30px);
    height: calc(100% - 30px);
    position: relative;
    padding: 16px 16px 0;
    > .search_detail_main_sectioned {
      padding-bottom: 11px;
    }
  }
}
.back {
  height: 30px;
  width: 11px;
  display: flex;
  margin-right: 22px;
  > .back_son {
    height: 12px;
    width: 11px;
    margin: auto 0;
    > img {
      display: block;
      height: 100%;
    }
  }
}
</style>
