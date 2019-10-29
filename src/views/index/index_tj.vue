<template>
  <div class="index_tj">
    <section class="displayBanner" v-if='params.themeType=="banner" && params.displayName'>
      <div :style='{"backgroundImage":`url(${params.bgImage})`}' class="heade headeHp" @click="$router.push(`/titleAppaction/${params.themeCode}`)">
      </div>
    </section>

    <section class="app" v-if='params.themeType=="app"'>
      <div class="box">
        <div class="box_son paddingTop16">
          <!-- <h3 class="index_title font-14 regular">
            <span class="index_title_left"></span>
            <span class="index_title_center font-14">{{params.themeName}}</span>
            <span class="index_title_right" @click="$router.push(`/allApplications/${params.themeCode}`)">
              查看全部
              <img src="../../assets/images/more.jpg" alt />
            </span>
          </h3> -->
          <div class="index_tj_mode">
            <ul>
              <li v-for="(item,index) in params.appList" :key="index">
                <sectioned :className="index==(params.appList.length-1)?'section67':'section67boder'" :params='item'></sectioned>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      <section class="app" v-if='params.themeType=="rec"'>
      <div class="box">
        <div class="box_son">
          <h3 class="index_title font-14 regular">
            <span class="index_title_left"></span>
            <span class="index_title_center font-14">{{params.themeName}}</span>
            <span class="index_title_right" @click="$router.push(`/allApplications/${params.themeCode}`)">
              查看全部
              <img src="../../assets/images/more.jpg" alt />
            </span>
          </h3>
          <div class="index_tj_mode">
            <ul>
              <li v-for="(item,index) in params.appList" :key="index">
                <sectioned :className="index==(params.appList.length-1)?'section67':'section67boder'" :params='item'></sectioned>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section v-if='params.themeType=="grid"' class='grid'>
      <div class="box" @click="$router.push(`/icon_all/${params.themeCode}`)">
        <div class="box_son">
          <h3 class="index_title font-14 regular">
            <span class="index_title_left"></span>
            <span class="index_title_center font-14">{{params.themeName}}</span>
          </h3>
          <scrollicon :params='params.appList'></scrollicon>
        </div>
      </div>
    </section>
    <section v-if='params.themeType=="banner" && !params.displayName' class='banner'>
      <div class="box" @click="$router.push(`/onceApplication/${params.themeCode}`)">
        <div class="box_son">
          <h3 class="index_title regular">
            <span class="index_title_left"></span>
            <span class="index_title_center font-14">{{params.themeName}}</span>
          </h3>
          <div class="index_tj_footer" :style='{"backgroundImage":`url(${params.bgImage})`}'></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active: '',
            show: false
        };
    },
    methods: {},
    props: ['params']

};
</script>
<style lang="less" scoped>
.index_tj {
  // height: 100%;
  > .displayBanner {
    padding: 0 16px 16px;
    > .heade {
      .hw(200px, 100%);
      .bgsp();
    }
  }
  .index_tj_mode {
    > ul {
      > li {
        padding: 0 11px;
        margin-bottom: 11px;
      }
    }
  }
  .index_tj_footer {
    .bgsp();
    height: 180px;
  }
}
</style>
