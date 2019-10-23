export default {
    data() {
        return {
            userName: '',
            phoneNum: '',
            msgContent: '',
            isubmit: true // 节流
        }
    },

    methods: {
        async submitRemarks() {
            if (!this.isubmit) {
                return
            }
            if (
                common.isTirm({
                    error: '请输入您的称呼',
                    str: this.userName
                }) ||
        common.isTirm({
            error: '请输入您的手机号码',
            str: this.phoneNum
        }) ||
        common.isTirm({
            error: '请输入留言内容',
            str: this.msgContent
        })
            ) {
                return
            }
            if (
                common.checked({
                    type: 'phone',
                    str: this.phoneNum,
                    error: '请正确的的手机号码'
                })
            ) {
                return
            }
            this.isubmit = false
            await this.$http
                .post(this.$url.leaverMessage, {
                    phoneNum: this.phoneNum,
                    userName: this.userName,
                    msgContent: this.msgContent
                })
                .then(res => {
                    this.$toast.success({
                        duration: 1000,
                        message: `留言${res.msg}`
                    })
                    this.$router.push('/')
                })
            this.isubmit = true
        }
    }
}
