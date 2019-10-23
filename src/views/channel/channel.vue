<template>
  <div class="channel">
    <header>
      <div class="applicationTitle">
        <span class="backicon" @click="$emit('closePop',false)"></span>
      </div>
    </header>
    <main class="channel_main">
      <section class="channel_myChannel">
        <h3 class="familyMedium font-18">
          我的频道
          <span>{{isUpdate?'长按可以拖拽排序':'点击进入频道'}}</span>
        </h3>
        <span @click="isUpdate=!isUpdate">{{isUpdate?'完成':'编辑'}}</span>
      </section>
      <section class="channel_update">
        <div class="flex-space tj" ref="father">
          <transition-group name="list" tag="ul">
            <li
              ref="offset"
              :class="`${moveclass}`"
              v-for="(item,index) in update"
              :key="item.text"
              @touchstart="start($event,index)"
              @touchmove="move"
              @touchend="end"
              v-drag="index"
            >
              <div class="channel_mode">
                <span
                  v-if="index!==0"
                  v-show="isUpdate"
                  class="delete"
                  @click="updateChannel(index)"
                >
                  <img src="../../assets/images/delete.jpg" alt />
                </span>
                {{item.text}}
              </div>
            </li>
          </transition-group>
        </div>
      </section>
      <section class="channel_myChannel">
        <h3 class="familyMedium font-18">
          推荐频道
          <span>点击添加频道</span>
        </h3>
      </section>
      <section class="channel_add">
        <div class="flex-space">
          <transition-group name="list" tag="ul">
            <li
              class="moveclass"
              v-for="(item,index) in add"
              :key="item.text"
              @click="addChannel(index)"
              v-drag="index"
            >
              <div class="channel_mode">
                <span class="color9">+</span>
                {{item.text}}
              </div>
            </li>
          </transition-group>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
    data() {
        return {
            update: [
                { text: '预定1', node: '' },
                { text: '预定2', node: '' },
                { text: '预定3', node: '' },
                { text: '预定4', node: '' },
                { text: '预定5', node: '' },
                { text: '预定6', node: '' },
                { text: '预定7', node: '' },
                { text: '预定8', node: '' },
                { text: '预定9', node: '' },
                { text: '预定10', node: '' }
            ],
            add: [
                { text: '推荐1', node: '' },
                { text: '推荐2', node: '' },
                { text: '推荐3', node: '' },
                { text: '推荐4', node: '' },
                { text: '推荐5', node: '' },
                { text: '推荐6', node: '' },
                { text: '推荐7', node: '' },
                { text: '推荐8', node: '' },
                { text: '推荐9', node: '' },
                { text: '推荐10', node: '' }
            ],
            isUpdate: false,
            timeout: '',
            moveclass: 'moveclass',
            position: { x: 0, y: 0 },
            isMove: false,
            target: '',
            offset: [],
            index: '',
            isadd: true,
            offsetTop: '',
            offsetLeft: ''
        };
    },
    mounted() {
        this.setPosition();
    },

    methods: {
        initialization() {
            // 初始化
            this.offset = [];
            this.$refs.offset.forEach((el, index) => {
                this.update[index].node = el;
                const { offsetTop, offsetLeft } = el;
                const params = {
                    offsetTop,
                    offsetLeft
                };
                this.offset.push(params);
            });
        },

        setFatherHeight() {
            // 设置父容器高度
            const { offsetHeight } = this.$refs.offset[0];
            this.$refs.father.style.height =
        (offsetHeight + 12) * Math.ceil(this.update.length / 4) + 'px';
        },
        setPosition() {
            // 位置重排
            this.$nextTick(() => {
                this.initialization();
                this.setFatherHeight();
            });
        },
        updateChannel(index) {
            // 删除
            this.add.unshift(...this.update.splice(index, 1));
            this.offset.pop();
            this.$nextTick(() => {
                this.setFatherHeight();
            });
        },
        addChannel(index) {
            // 添加
            this.update.push(...this.add.splice(index, 1));
            this.setPosition();
        },
        start(event, index) {
            if (index === 0) {
                return;
            }
            this.timeout && clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                var touch;
                if (event.touches) {
                    touch = event.touches[0];
                } else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.target = event.target.parentNode;
                this.index = index;
                this.target.style.zIndex = 100;
                this.isUpdate = true;
                this.isMove = true;
            }, 2000);
        },
        move(event) {
            this.moveclass = '';
            if (this.isMove) {
                var touch;
                if (event.touches) {
                    touch = event.touches[0];
                } else {
                    touch = event;
                }
                let top = touch.clientY - this.position.y;
                let left = touch.clientX - this.position.x;
                this.offsetLeft =
          left + parseFloat(window.getComputedStyle(this.target).left);
                this.offsetTop =
          top + parseFloat(window.getComputedStyle(this.target).top);
                this.target.style.transform = `translate(${left}px,${top}px)`;
                document.addEventListener(
                    'touchmove',
                    function() {
                        event.preventDefault();
                    },
                    false
                );
            }
        },
        end(e) {
            if (this.isMove) {
                this.moveclass = 'moveclass';
                this.$nextTick(() => {
                    this.target.style.zIndex = 0;

                    this.offset.some((el, index) => {
                        if (!index) {
                            return;
                        }
                        if (
                            Math.abs(el.offsetTop - this.offsetTop) <= 30 &&
              Math.abs(el.offsetLeft - this.offsetLeft) <= 30
                        ) {
                            this.update.splice(
                                index,
                                0,
                                ...this.update.splice(this.index, 1)
                            );
                        }
                    });

                    this.target.style.transform = 'translate(0px,0px)';
                    this.target = '';
                });
            }
            this.isMove = false;
        }
    }
};
</script>
<style lang="less" scope>
.channel {
  padding-top: 15px;
}
.channel_main {
  padding: 6px 12px 0 12px;

  > .channel_update {
    margin-bottom: 10px;
  }
  .backicon {
    background-image: url("../../assets/images/back.jpg");
  }
}
/** 插入过程 **/
.list-enter-active {
  transition: all 0.2s;
}
/** 移除过程 **/
.list-leave-active {
  transition: all 0.2s;
}
/*** 开始插入、移除结束的位置变化 ***/
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.moveclass {
  // transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: all 0.5s ease-in-out;
}
</style>
