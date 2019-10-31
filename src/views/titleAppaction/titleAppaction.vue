<template>
  <div class="titleAppaction overflowScroll-y" @scroll="scroll" ref="titleFather">
    <div class="titleAppaction_son" ref="titleSon">
      <header class="titleAppaction_header">
        <section
          class="titleAppaction_header_sec"
          :style='{"backgroundImage":`url(${params.bannerUrl})`}'
        >
          <!-- <h3 class="font-20">以大数据智能化为引导的教育信息化</h3>
          <p>以大数据智能化为引导的教育信息化行动计划全面实行</p>-->
        </section>
      </header>
      <main class="titleAppaction_main" v-html="params.itemList[0].themeIntroduction">
        <!-- <p class="font-17">
          8月19日消息，台湾地区《经济日报》报道，业界传出新首度支持。8月19日消息
          ，台湾地区《经济日报》报道，业界传出新首度支持。8月19日消息，
          台湾地区《经济日报》报道，业界传出新首度支持。8月19日消息，台湾
          地区《经济日报》报道，业界传出新首度支持。8月19日消息，台湾地区《
          经济日报》报道，业界传出新首度支持。8月19日消息，台湾地区《经济日报》报
          道，业界传出新首度支持。8月19日消息，台湾地区《经济日报》报道，业界传出新首
          度支持。8月19日消息，台湾地区《经济日报》报道，业界传出新首度支持。8月19日消息，台
          湾地区《经济日报》报道，业界传出新首度支持。8月19日消息，台湾地区《经济日报》报道，
          业界传出新首度支持。
        </p>
        <img src="../../assets/images/img1.jpg" alt />
        <p class="font-17">8月19日消息，台湾地区《经济日报》报道，业界传出新首度支持。8月19日消息，台湾地区《经济日报》报道，业界传出新首度支持。</p>-->
      </main>
      <footer class="titleAppaction_footer">
        <div :class="`${positionName} transfromfooter`">
          <sectioned :className="sectionName" :params="params.itemList[0]"></sectioned>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            sectionName: 'section64',
            positionName: '',
            scrollMax: '',
            params: this.$parent.params
        };
    },
    mounted() {
        this.getScrollMax();
        this.init();
    },
    methods: {
        scroll(e) {
            this.isPosition(e.target.scrollTop >= this.scrollMax);
        },
        getScrollMax() {
            setTimeout(() => {
                this.getHeight((fatherHeight, sonHeight) => {
                    const value = sonHeight - fatherHeight;
                    this.scrollMax = value - 50 > 0 ? value * 0.9 : -1;
                });
            }, 0);
        },
        isPosition(flag) {
            if (flag) {
                this.positionName = '';
                this.sectionName = 'section64';
                return;
            }
            this.positionName = 'positionAb';
            this.sectionName = 'section38';
        },
        getHeight(callback) {
            const [{ offsetHeight: fatherHeight }, { offsetHeight: sonHeight }] = [
                this.$refs.titleFather,
                this.$refs.titleSon
            ];
            callback(fatherHeight, sonHeight);
        },
        init() {
            this.$nextTick(() => {
                this.getHeight((fatherHeight, sonHeight) => {
                    this.isPosition(fatherHeight + 50 >= sonHeight);
                })
            });
        }
    }
};
</script>
<style lang="less" scope>
.titleAppaction {
  height: 100%;
  > .titleAppaction_son {
    > .titleAppaction_header {
      > .titleAppaction_header_sec {
        .hw(200px, 100%);
        .bgsp(110%, 110%, center);
      }
    }
    > .titleAppaction_main {
      padding: 16px 16px 13px 16px;
      overflow: hidden;
      > p {
        color: @color3;
        text-align: left;
        line-height: 26px;
        margin-bottom: 16px;
      }
      > img {
        margin-bottom: 16px;
        width: 100%;
      }
    }
    > .titleAppaction_footer {
      padding: 0 16px 5px 16px;
      width: 100%;
    }
  }
  .positionAb {
    .hw(60px, calc(100% - 32px));
    position: fixed;
    bottom: 12px;
    box-shadow: @shadowtwo;
    background-color: #fff;
    z-index: 10;
    padding: 11px 12px 11px 11px;
  }
  .transfromfooter {
    transition: all 0.2s;
  }
}
</style>
