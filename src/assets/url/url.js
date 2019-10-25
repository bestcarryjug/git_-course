const baseurl = {
    channel: 'app/',
    base: 'pluto/app/'
}
const base = function ({
    type = 'base',
    url = ''
}) {
    return `${baseurl && baseurl[type] + url}`
}
const url = {
    index: 'category/list',
    index_list: 'prd/list',
    datils: 'prd/detail',
    search: 'search',
    leaverMessage: 'call',
    channelList: 'channel/list',
    channelDetail: 'channel/detail',
    themeDetail: 'theme/detail'

}
export default url
