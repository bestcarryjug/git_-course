
const baseurl = {
    channel: '/rap-server/app/mock/16/app/',
    base: '/pluto/app/'
}
const base = function ({ type = 'base', url = '' }) {
    return `${baseurl && baseurl[type] + url}`
}
const url = {
    index: base({ url: 'category/list' }),
    index_list: base({ url: 'prd/list' }),
    datils: base({ url: 'prd/detail' }),
    search: base({ url: 'search' }),
    leaverMessage: base({ url: 'call' }),
    channelList: base({ url: 'channel/list', type: 'channel' }),
    channelDetail: base({ url: 'channel/detail', type: 'channel' }),
    themeDetail: base({ url: 'theme/detail', type: 'channel' })
}
export default url
