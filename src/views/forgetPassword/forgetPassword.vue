<template>
  <div class="forgetPassword">
    <header>
      <application></application>
    </header>
    <main>
      <section>
        <div class="myInput relative">
          <span class="loginicon">
            <img src="../../assets/images/phone.png" alt />
          </span>
          <input class="paddingLeft20" type="text" placeholder="请输入手机号" />
        </div>
        <div class="myInput relative">

          <input class="paddingLeft40" type="text" placeholder="请输入验证码" />
           <van-button class="sendCode">发送验证码</van-button>
        </div>
        <van-button class="button marginTop158" type="danger" @click="$router.push('/updatePassword')">下一步</van-button>
      </section>
    </main>
  </div>
</template>
<script>
export default {
    data: function() {
        return {
            active: 1
        };
    },

    methods: {
        onChange(event) {}
    }
};
</script>
<style lang="less">
.forgetPassword {
  width: 100%;
  > main {
    padding: 0 16px;
  }
}
</style>
