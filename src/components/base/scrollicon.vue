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
            let fn = () => {
                const ul = this.$refs.scrollicon_ul;
                const list = [...ul.childNodes];
                ul.style.width = (list[0].offsetWidth * list.length) + 'px';
                console.log(ul.offsetWidth)
            }
            setTimeout(fn, 0);
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
  width: 100%;
  > ul {
    height: 100%;
    display: flex;
    // width: auto;
    // justify-content: space-between;
    animation:10s scroll linear infinite normal;
    -moz-animation:10s  scroll linear infinite normal;
    -o-animation:10s scroll linear infinite normal;
    -webkit-animation: 10s  scroll linear infinite normal;
    > li {
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      flex: none;
      width: 74px;
      > .imgbox {
        .hw(64px);
        margin-bottom: 15px;
        // margin-right: 10px;
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
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -moz-transform:translateX(0);
    -o-transform:translateX(0);
  }
  100% {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -moz-transform:translateX(-50%);
    -o-transform:translateX(-50%);
  }
}
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -moz-transform:translateX(0);
    -o-transform:translateX(0);
  }
  100% {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -moz-transform:translateX(-50%);
    -o-transform:translateX(-50%);
  }
}
</style>
