<template>
  <div class="datilinformation">
    <section class="datilinformation_section">
      <div class="datilinformation_section_son">
        <span>{{params.title}}</span>
        <span @click="rotate=!rotate">
          <ul :style="{'max-height':rotate?'100px':'20px'}">
            <li v-for="(item,index) in params.list" :key="index">{{item}}</li>
          </ul>
          <div class="topArrow" v-show="params.list.length>1">
            <img
              :style='{"transform":rotate?"rotateZ(180deg)":"rotateZ(0deg)"}'
              src="../../assets/images/返回 copy 9.png"
              alt
            />
          </div>
        </span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rotate: false
    }
  },
  props: {
    params: {
      type: Object,
      default () {
        return {
          title: '类别',
          list: ['信息化', '信息化', '信息化']
        }
      }
    }
  }
}
</script>
<style lang="less">
.datilinformation {
  > .datilinformation_section {
    > .datilinformation_section_son {
      width: 100%;
      display: flex;
      color: #666;

      padding-bottom: 20px;
      justify-content: space-between;
      > span {
        line-height: 20px;
        > ul {
          transition: max-height 0.5s;
          overflow: hidden;
          // >li:first-child{

          // }
          > li {
            color: #333;
            line-height: 20px;
            text-align: right;
          }
        }
      }
      > span:last-child {
        display: flex;
        .topArrow {
          transform: scale(0.7);
          height: 5px;
          margin-top: 2px;
          margin-left: 7px;

          > img {
            transition: transform 0.5s;
          }
        }
      }
    }
  }
}
</style>
