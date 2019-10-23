
// 统一注册公共组件
const requireComponent = require.context('../components/base', false, /[vue|js]$/)
const resgisterComponent = {
    install (Vue) {
        requireComponent.keys().forEach(filename => {
            let componentConfig = requireComponent(filename) // 获取组件配置
            let componentName = filename.replace(/^\.\/(.*)\.\w+$/, function (...a) {
                return a[1]
            })
            Vue.component(componentName, componentConfig.default || componentConfig)
        })
    }
}

export default resgisterComponent
