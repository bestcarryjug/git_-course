import recommend from './index_tj.vue'
import channel from '../channel/channel.vue';
import { channelDetail } from '../../plugin/mixins'

export default {
    mixins: [channelDetail],
    data () {
        return {
            activeName: 'second',
            params: [],
            active: 0,
            channelCode: '',
            paramsyy: '',
            show: false

        }
    },
    components: {
        recommend,
        channel
    },
    async created () {
        await this.getList();
        this.changeTab(0)
    },
    methods: {
        getList () {
            return this.$http
                .get(this.$url.channelList)
                .then(res => {
                    this.params = res.data
                })
        },
        async changeTab (name) {
            this.paramsyy = ''
            this.channelCode = this.params[name].channelCode
            const { data } = await this.getChannelDetail(this.channelCode);
            this.paramsyy = data
        },
        closePop(bol) {
            this.show = bol
        }
    }
}
