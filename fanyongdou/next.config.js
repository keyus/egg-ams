const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}
module.exports = withCSS(withSass());
// module.exports = withSass();
