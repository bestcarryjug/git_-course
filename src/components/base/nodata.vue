<template>
  <div class="nodata_father">
    <div class="nodata">
      <img src="../../assets/images/nodata.png" alt />
      <p class='nodata_p'>暂无应用</p>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.nodata_father {
  display: flex;
  padding-top: 150px;
  width: 100%;
  > .nodata {
    height: 141px;
    width: 263px;
    flex: none;
    margin: 0 auto;
    > img {
      height: 100%;
    }
    >.nodata_p{
      text-align: center;
      .font-16;
      color: #999;
      padding-top: 38px;
    }
  }
}
</style>
