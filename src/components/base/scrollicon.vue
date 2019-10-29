<template>
  <div class="scrollicon">
    <ul class="scrollicon_ul" ref="scrollicon_ul" v-if="appIcon.length">
      <li v-for="(item,index) in appIcon" :key="index">
        <div class="imgbox">
          <img :src="item[0]" alt />
        </div>
        <div class="imgbox">
          <img :src="item[1]" alt />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            appIcon: []
        };
    },
    created() {
        this.getIcon();
    },
    mounted() {
        this.$nextTick(() => {
            const ul = this.$refs.scrollicon_ul;
            const list = [...ul.childNodes];
            ul.style.width = list[0].offsetWidth * list.length + 'px';
        });
    },
    methods: {
        getIcon() {
            let params = [];
            params =
        this.params.length % 2 === 0
            ? this.params
            : [...this.params, ...this.params];
            params.every((el, index) => {
                if (index % 2 !== 0) {
                    return true;
                }
                return this.appIcon.push([params[index].appIcon, params[index + 1].appIcon]);
            });
            while (this.appIcon.length <= 10) {
                this.appIcon = [...this.appIcon, ...this.appIcon]
            }
        }
    },
    props: ['params']
};
</script>
<style lang="less" scope>
.scrollicon {
  // padding: 0 15px;
  > .scrollicon_ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    animation: 3s scroll linear infinite normal;
    -moz-animation:3s scroll linear infinite normal;
    -o-animation:3s scroll linear infinite normal;
    > li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > .imgbox {
        .hw(64px);
        margin-bottom: 15px;
        margin-right: 10px;
        overflow: hidden;
        > img {
          .hw(100%);
          display: block;
        }
      }
    }
  }
}
@keyframes scroll {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -moz-transform:translate3d(0, 0, 0);
    -o-transform:translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
    -moz-transform:translate3d(-50%, 0, 0);
    -o-transform:translate3d(-50%, 0, 0);
  }
}
</style>
