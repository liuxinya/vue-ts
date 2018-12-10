const path = require('path');
function getIpv4s(ignoreLocal) {
    let interfaces = require('os').networkInterfaces();
    let arr = [];
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4') {
                if ((ignoreLocal && alias.address !== '127.0.0.1') || !ignoreLocal) {
                    arr.push(alias.address);
                }
            }
        }
    }
    return arr;
}
let ips = getIpv4s(true);
let uselocal = false;
let ip = uselocal ? 'localhost' : (ips && ips.length > 0 ? ips[0] : 'localhost');

let port = 11001;
console.log(`http://${ip}:${port}`);
module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        assetsRoot: path.resolve(__dirname, '../../_dist'),
        proxyTable: {},

        // Various Dev Server settings
        host: ip, // can be overwritten by process.env.HOST
        port: port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,
        /**
         * Source Maps
         */
        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',
        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,
        cssSourceMap: true
    },
    build: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        assetsRoot: path.resolve(__dirname, '../../_dist'),
        zip: true,
        productionGzipExtensions: ['js', 'css'],
    }
};