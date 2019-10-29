<template>
  <div class="mylogin">
    <header>
      <application></application>
    </header>
    <main>
      <van-tabs active="active" swipeable animated>
        <van-tab title="登录">
          <div class="myInput relative">
            <span class="loginicon">
              <img src="../../assets/images/phone.png" alt />
            </span>
            <input class="paddingLeft20" type="text" placeholder="请输入手机号" />
             <span></span>
          </div>
          <div class="myInput relative">
            <span class="loginicon">
              <img src="../../assets/images/suo.png" alt />
            </span>
            <input class="paddingLeft20" type="text" placeholder="请输入密码" />
          </div>
          <van-button class="button marginTop158" type="danger">登录</van-button>
          <span class="forget">忘记密码？</span>
        </van-tab>
        <van-tab title="注册">
          <div class="myInput relative">
            <span class="loginicon">
              <img src="../../assets/images/phone.png" alt />
            </span>
            <input class="paddingLeft20" type="text" placeholder="请输入手机号" />
          </div>
          <div class="myInput relative">
            <span class="loginicon">
              <img src="../../assets/images/suo.png" alt />
            </span>
            <input class="paddingLeft20" type="text" placeholder="请输入密码" />
          </div>
          <div class="myInput relative">
            <input class="paddingLeft40" type="text" placeholder="请输入验证码" />
             <van-button class="sendCode">发送验证码</van-button>
          </div>
          <van-button class="button marginTop98" type="danger">注册</van-button>
        </van-tab>
      </van-tabs>
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
.mylogin {
  width: 100%;
  > main {
    padding: 0 16px;
  }
  .van-tab--active {
    color: @color3;
  }
  .van-tab {
    .font-18;
    color: @color3;
    letter-spacing: 5px;
  }
  .van-tabs__line {
    width: 62px !important;
    height: 2px;
    background: @colorRed;
    border-radius: 1px;
  }
}

</style>
