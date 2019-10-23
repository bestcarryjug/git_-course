<template>
  <div class="icon_all overflowScroll-y" >
    <div class="icon_all_son">
      <header class="icon_all_header">
        <section class="icon_all_header_sec">
          <scrollicon :params='params.itemList'></scrollicon>
        </section>
      </header>
      <main class="icon_all_main">
        <p class="font-16 p_1" v-html='params.themeIntroduction'>校园主题应用说明校园主题应用说明校园主题应用说明校园主题应用说明校园主题应用说明校园主题应用说明</p>
        <section class="icon_all_main_section" v-for="(item,index) in params.itemList" :key='index'>
          <sectioned :className="index==3?'section':'sectionboder'" :params='item'></sectioned>
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
    }

};
</script>
<style lang="less" scope>
.icon_all {
  height: 100%;
  width: 100%;
  > .icon_all_son {
    > .icon_all_header {
      > .icon_all_header_sec {
        width: 100%;
        overflow: hidden;
        padding: 11px 0 0 0px;
        border-bottom: @borderF8;
      }
    }
    > .icon_all_main {
      padding: 16px 16px 0px 16px;
      >.icon_all_main_section{
        margin-bottom: 11px;
      }
    }
  }
}
</style>
