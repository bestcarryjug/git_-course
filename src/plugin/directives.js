function directives(Vue) {
    Vue.directive('drag', {
        bind(el) {
            el.style.position = 'absolute'
        },
        inserted(el, binding) {
            setTf(el, binding)
        },
        componentUpdated(el, binding) {
            setTf(el, binding)
        }

    })
}
function setTf(el, binding) {
    const top = el.offsetHeight + 12
    el.style.left = binding.value % 4 * 25 + '%'
    el.style.top = parseInt(binding.value / 4) * top + 'px'
}
const directive = {
    install(Vue) {
        directives(Vue)
    }

}

export default directive
