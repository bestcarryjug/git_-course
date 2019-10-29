<template>
    <div class="myInput">
      <slot name='icon'></slot>
      <input class="paddingLeft20" type="text" placeholder="请输入手机号" @change="requireCallback"/>
      <span>{{message}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isRequire: false
        }
    }

};
</script>
<style lang="less">
</style>
