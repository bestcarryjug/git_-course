<template>
  <div :class="className" >
    <div class="section_left">
      <img :src="params.appIcon" alt />
    </div>
    <div class="section_right">
      <h3   class="Bold font-16 regular van-ellipsis">{{params.appName}}</h3>
      <p class="van-ellipsis">{{params.appDescription}}</p>
    </div>
    <a class="get font-13" href="javascript: void(0);" @click="$router.push({path:`/datils/${params.appCode}`})">查看</a>
  </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        params: {
            type: Object,
            default() {
                return {
                    appName: '辅导猫',
                    appDescription: '专为辅导员设计的协同办公平台11111111111111111111111'
                };
            }
        },
        className: {
            type: String,
            default() {
                return 'sectionboder';
            }
        }
    }
};
</script>
<style lang="less" scope>

.section67 {
  .scopemix(67px, 56px, none, 7px, 3px);
}
.section67boder {
  .scopemix(67px, 56px, @border, 7px, 3px);
}
.section {
  .scopemix();
}
.sectionboder {
  .scopemix(75px, 64px, @border, 8px, 6px);
}
.section38{
  .scopemix(38px,38px,none,0px,0px);
}
.section64 {
  .scopemix(64px, 64px, none, 8px, 6px);
}
.section64border {
  .scopemix(64px, 64px, @border, 8px, 6px);
}
.sectionpadding{
 .scopemix(86px, 64px, none, 8px, 6px,11px);
}
.sectionpaddingborder{
 .scopemix(86px, 64px, @border, 8px, 6px,11px);
}
</style>
