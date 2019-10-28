<template>
  <div class="datilsection">
    <section class="datilsection_section">
      <div class="datilsection_section_title">
        <span>{{params.compatibilityName}}</span>
        <span
          @click="rotate=!rotate"
          :style='{"transform":rotate?"rotateZ(180deg)":"rotateZ(0deg)"}'
          v-if='params.resourceList.length'
        >
          <img src="../../assets/images/返回 copy 9.png" alt />
        </span>
      </div>
      <div class="datilsection_section_list" :style="{'max-height':rotate?'278px':'0px'}">
        <ul v-if='params.resourceList.length'>
          <li :style='{"height":params.height}'
            v-for="(item,index) in params.resourceList"
            :key="index"
            @click="getResourceUrl(index)"
          >
            <div>
              <img :src="item.resourceUrl" alt />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    data () {
        return {
            rotate: this.params.open,
            resourceUrl: []
        }
    },
    props: {
        params: {
            type: Object
        }
    },
    created () {
        this.resourceUrl = this.params.resourceList.map(item => {
            return item.resourceUrl
        })
    },
    methods: {
        getResourceUrl (index) {
            this.$ImagePreview({
                startPosition: index,
                images: this.resourceUrl
            })
        }
    }
}
</script>
<style lang="less">
.datilsection {
  padding-bottom: 16px;
  > .datilsection_section {
    > .datilsection_section_title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 6px;
      > span {
        color: #333;
        transition: transform 0.5s;
      }
    }
    > .datilsection_section_list {
      width: 100%;
      overflow-y: hidden;
      transition: max-height 0.5s;
      > ul {
        display: flex;
        > li {
          flex: none;
          margin-right: 6px;
          border: 2px solid @colorF;
          height: 269px;
          > div {
            height: 100%;
            > img {
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
