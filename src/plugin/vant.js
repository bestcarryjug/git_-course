import { Button, Row, Col, Tab, Tabs, Popup, Field, Toast, ImagePreview } from 'vant'

const vants = {
    install (Vue) {
        Vue.use(Button).use(Row).use(Col).use(Tab).use(Tabs).use(Popup).use(Field)
        Vue.prototype.$toast = Toast
        Vue.prototype.$ImagePreview = ImagePreview
    }
}
export default vants
