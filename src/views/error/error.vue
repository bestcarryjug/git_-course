<template>
  <div class="error">
    <main>
      <div class="errorImg"></div>
      <p>服务器内部错误，崩溃啦</p>

      <van-button class="button bgcoloRed" @click="$router.push('/index')">回到首页</van-button>
      <van-button class="button bgcoloWhite" @click="$router.go(-1)">回到上一页</van-button>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.error {
 .hw(100%);
  > main {
    > .errorImg {
      margin: 174px auto 0;
      background-image: url("../../assets/images/error.png");
      .hw(108px, 123px);
      background-position: center center;
      background-size: 100% 100%;
    }
    > p {
      padding-top: 28px;
      text-align: center;
      .font-15;
      color: @color3;
      margin-bottom: 66.5px;
    }
    >button{
      .hw(34px,184px);
      margin: 0 auto 20px;
      display: block;
      border-radius: 2px;
      line-height: 34px;
      .font-15;
    }
  }
}
</style>
