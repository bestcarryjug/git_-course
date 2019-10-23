import datilsection from '../../components/other/datilsection.vue'
import datilinformation from '../../components/other/datilinformation'

export default {
    data () {
        return {
            params: '',
            appCode: this.$route.params.appCode
        }
    },
    components: {
        datilsection,
        datilinformation
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            this.$http.get(`${this.$url.datils}?appCode=${this.appCode}`).then(res => {
                this.params = res.data
            })
        },
        getResourceUrl (index) {
            this.$ImagePreview({
                startPosition: index,
                images: this.params.qualityReportList
            })
        }
    }
}
