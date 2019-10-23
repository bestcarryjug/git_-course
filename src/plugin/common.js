import {
    Toast
} from 'vant'

window.common = (function (window) {
    let t = {}
    t.regular = {
        'phone': /^1[3456789]\d{9}$/
    }
    t.isTirm = (obj = {
        str: '',
        error: ''
    }) => {
        if (!obj.str.trim()) {
            return Toast.fail({
                duration: 1000,
                message: `${obj.error}`
            })
        }
        return false
    }
    t.checked = (obj = {
        type: 'default',
        str: '',
        error: ''
    }) => {
        if (!t.regular[obj.type].test(obj.str.trim())) {
            return Toast.fail({
                duration: 1000,
                message: `${obj.error}`
            })
        }
        return false
    }

    function heavyLoad (obj, name, fn) {
        let old = obj[name]
        obj[name] = function () {
            if (fn.length === arguments.length) {
                return fn.apply(this, arguments)
            } else if (typeof old === 'function') {
                return old.apply(this, arguments)
            }
        }
    } // 重载
    return t
})(window)
