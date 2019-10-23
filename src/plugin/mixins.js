const channelDetail = {
    methods: {
        getChannelDetail(channelCode) {
            return this.$http.get(`${this.$url.channelDetail}?channelCode=${channelCode}`)
        }
    }
}

const themeDetail = {
    methods: {
        getThemeDetail(themeCode) {
            return this.$http.get(`${this.$url.themeDetail}?themeCode=${themeCode}`)
        }
    },
    async created() {
        const { data } = await this.getThemeDetail(this.$route.params.themeCode)
        this.params = data
        this.title = data.themeName
    },
    data () {
        return {
            params: ''
        }
    }
}

export {
    channelDetail,
    themeDetail
}
