<template>
  <div class="updatePassword">
    <header>
      <application></application>
    </header>
    <main>
      <section>
        <div class="myInput relative">
          <input type="text" placeholder="请输入新密码" />
          <span class="errorMessage">请输入新密码</span>
        </div>
        <div class="myInput relative">
          <input type="text" placeholder="请在确认密码" />
        </div>
        <van-button class="button marginTop158" type="danger">确定</van-button>
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
.updatePassword {
  width: 100%;
  > main {
    padding: 0 16px;
  }
}
</style>
