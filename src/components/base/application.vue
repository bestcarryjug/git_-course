<template>
  <div class="applicationTitle">
    <span class="backicon" @click="$router.go(-1)"></span>
    <h3 class="font-17">
      <slot></slot>
    </h3>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
.backicon{
     background-image: url("../../assets/images/back.jpg");
}
</style>
