<template>
  <div class="headerSearch">
    <slot name='headerSearch_left'></slot>
    <input
      @keydown.enter="enkeyup"
      @focus.once="goSearch"
      class="headerSearch_search font-14"
      placeholder="搜索应用"
      :value="value"
    />
    <slot name='headerSearch_right'></slot>
  </div>
</template>
<script>
export default {
    name: 'headerSearch',
    data() {
        return {};
    },

    methods: {
        enkeyup(e) {
            this.$emit('enkeyup', e.target.value)
        },
        goSearch() {
            this.$route.fullPath == '/search' ? '' : this.$router.push('/search')
        }
    },
    props: {
        value: {
            type: String
        }
    }
};
</script>

<style lang="less" scope>
.headerSearch {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  > .headerSearch_search {
    .hw(30px,100%);
    background-color: @colorF;
    border-radius: 0;
    border: none;
    color: @color9;
    background-image: url("../../assets/images/Icon@3x.png");
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 12px;
    background-size: 14px 14px;
    padding-left: 38px;
    &::-webkit-input-placeholder {
      .placeholder();
    }
    &:-moz-placeholder {
      .placeholder();
    }
    &::-moz-placeholder {
      .placeholder();
    }
    &:-ms-input-placeholder {
      .placeholder();
    }
  }
}

</style>
