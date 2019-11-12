const dev = require('./config/webpack.config.dev')
const common = require('./config/webpack.config.common')
const prod = require('./config/webpack.config.prod')
const merge = require("webpack-merge");
const dll = require('./config/webpack.dll.config')

module.exports = config => {
	let commons = common(config.environmental)
	if (config.mode === 'development') {
		if (config.dll) {
			return merge(dll.dll)
		}
		return merge(commons, dev)
	}
	return merge(commons, prod)
}