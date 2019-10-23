<template>
  <div class="onceApplication overflowScroll-y">
    <div class="onceApplication_son">
      <header class="onceApplication_header">
        <section class="onceApplication_header_sec" :style='{"backgroundImage":`url(${params.bannerUrl})`}'></section>
      </header>
      <main class="onceApplication_main">
        <section class="onceApplication_main_section" v-for="(item,index) in params.itemList" :key='index'>
          <p class="font-16 p_1" v-html="item.themeIntroduction"></p>
          <sectioned :className='"section64"' :params='item'></sectioned>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            params: this.$parent.params
        };
    },

    methods: {

    }
};
</script>
<style lang="less" scope>
.onceApplication {
  height: 100%;
  width: 100%;
  > .onceApplication_son {
    > .onceApplication_header {
      > .onceApplication_header_sec {
        .hw(180px, 100%);
        .bgsp(110%, 100%, center);
        background-image: url("../../assets/images/footer.jpg");
      }
    }
    > .onceApplication_main {
      padding: 16px 16px 0px 16px;
      overflow: hidden;
      > .onceApplication_main_section {
        padding-bottom: 15px;
        border-bottom: @border;
        margin-bottom: 15px;

      }
    }
  }
}
</style>
