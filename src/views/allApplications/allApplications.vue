<template>
  <div class='allApplications'>
    <main class='allApplications_main overflowScroll-y'>
      <ul>
        <li v-for='(item,index) in params.itemList' :key='index'>
          <sectioned :className = 'index == 7?"section":"sectionboder"' :params='item'></sectioned>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
    data() {
        return {
            params: this.$parent.params
        }
    }

}
</script>
<style lang="less">
.allApplications{
  width: 100%;
  height: 100%;
  >.allApplications_main{
    height: calc(100% - 35px);
    padding-top: 16px;
    >ul{
      li{
        padding: 0 16px 11px 16px;
      }
    }
  }
}
</style>
